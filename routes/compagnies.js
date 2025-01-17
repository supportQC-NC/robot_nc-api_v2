import express from 'express';
import { addCompagny, deleteCompagny, getCompagnies, getCompagny, updateCompagny, uploadCompagnyPhoto } from '../controllers/compagnies.js';


const router = express.Router();


router
  .route('/')
  .get(getCompagnies) 
  .post(addCompagny );


router
  .route('/:id')
  .get(getCompagny) 
  .put(updateCompagny) 
  .delete(deleteCompagny); 


  router.route("/:id/photo").put(uploadCompagnyPhoto);// Nouvelle route

export default router;
