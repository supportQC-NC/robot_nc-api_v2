import crypto from 'crypto';
import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/async.js';
import forgotPasswordTemplate from '../mail/forgotPassword.js';
import sendEmail from '../utils/sendEmail.js';
import User from '../models/User.js';
import welcomeEmailTemplate from '../mail/welcomeEmail.js';
import createLog from '../utils/logger.js'; // Fonction pour enregistrer les logs

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    // Generate welcome email template
    const { subject, message, html } = welcomeEmailTemplate(name);

    // Send welcome email
    await sendEmail({
      email: user.email,
      subject,
      message, // Plain text version
      html,    // HTML version
    });

    // Log registration
    await createLog(user._id, 'Créer', { name, email }, 'Succès');

    // Send token response
    sendTokenResponse(user, 200, res);
  } catch (error) {
    await createLog(null, 'Créer', { name, email }, 'Échec');
    return next(new ErrorResponse(error.message, 500));
  }
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Validate email & password
    if (!email || !password) {
      throw new ErrorResponse('Veuillez fournir une adresse e-mail et un mot de passe.', 400);
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new ErrorResponse('Identifiants invalides', 401);
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      throw new ErrorResponse('Identifiants invalides', 401);
    }

    // Log successful login
    await createLog(user._id, 'Consulter', { email }, 'Succès');

    sendTokenResponse(user, 200, res);
  } catch (error) {
    await createLog(null, 'Consulter', { email }, 'Échec');
    return next(error);
  }
});

// @desc      Log user out / clear cookie
// @route     GET /api/v1/auth/logout
// @access    Private
const logout = asyncHandler(async (req, res, next) => {
  try {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });

    // Log successful logout
    await createLog(req.user.id, 'Consulter', {}, 'Succès');

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    await createLog(req.user.id, 'Consulter', {}, 'Échec');
    return next(error);
  }
});

// @desc      Get current logged in user
// @route     POST /api/v1/auth/me
// @access    Private
const getMe = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    // Log access
    await createLog(req.user.id, 'Consulter', {}, 'Succès');

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    await createLog(req.user.id, 'Consulter', {}, 'Échec');
    return next(error);
  }
});

// @desc      Update user details
// @route     PUT /api/v1/auth/updatedetails
// @access    Private
const updateDetails = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email,
  };

  try {
    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
      new: true,
      runValidators: true,
    });

    // Log update
    await createLog(req.user.id, 'Modifier', fieldsToUpdate, 'Succès');

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    await createLog(req.user.id, 'Modifier', fieldsToUpdate, 'Échec');
    return next(error);
  }
});

// @desc      Update password
// @route     PUT /api/v1/auth/updatepassword
// @access    Private
const updatePassword = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('+password');

    // Check current password
    if (!(await user.matchPassword(req.body.currentPassword))) {
      throw new ErrorResponse('Le mot de passe est incorrect', 401);
    }

    user.password = req.body.newPassword;
    await user.save();

    // Log password update
    await createLog(req.user.id, 'Modifier', {}, 'Succès');

    sendTokenResponse(user, 200, res);
  } catch (error) {
    await createLog(req.user.id, 'Modifier', {}, 'Échec');
    return next(error);
  }
});

// @desc      Forgot password
// @route     POST /api/v1/auth/forgotpassword
// @access    Public
const forgotPassword = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new ErrorResponse('Il n’existe aucun utilisateur correspondant à cette adresse e-mail', 404);
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Generate reset URL
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;
    const { subject, message, html } = forgotPasswordTemplate(resetUrl);

    await sendEmail({
      email: user.email,
      subject,
      message,
      html,
    });

    // Log successful email sending
    await createLog(user._id, 'Consulter', { email: user.email }, 'Succès');

    res.status(200).json({ success: true, data: 'E-mail envoyé' });
  } catch (error) {
    await createLog(null, 'Consulter', { email: req.body.email }, 'Échec');
    return next(error);
  }
});

// @desc      Reset password
// @route     PUT /api/v1/auth/resetpassword/:resettoken
// @access    Public
const resetPassword = asyncHandler(async (req, res, next) => {
  try {
    // Get hashed token
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    // Find user by token
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      throw new ErrorResponse('Token invalide ou expiré', 400);
    }

    // Set new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    // Log successful password reset
    await createLog(user._id, 'Modifier', { reset: 'Mot de passe réinitialisé' }, 'Succès');

    // Send token response
    sendTokenResponse(user, 200, res);
  } catch (error) {
    // Log failed password reset
    await createLog(null, 'Modifier', { resetToken: req.params.resettoken }, 'Échec');
    return next(error);
  }
});


export {
  register,
  login,
  logout,
  resetPassword,
  forgotPassword,
  updateDetails,
  updatePassword,
  getMe,
};
