import express from "express";
import { getAwTier, getAwTiers } from "../../controllers/tiers/awTiers.js";
import advancedResults from "../../middleware/advancedResults.js";
import awTiers from "../../models/bases/AW/Fournisseur.js";

const router = express.Router();

// Route pour obtenir tous les fournisseurs avec le middleware `advancedResults`
router
  .route("/")
  .get(advancedResults(awTiers), getAwTiers);

// Route pour obtenir un fournisseur spécifique par son ID
router
  .route("/:id")
  .get(getAwTier);

export default router;
