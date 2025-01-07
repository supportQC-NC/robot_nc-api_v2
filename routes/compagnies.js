import express from 'express';
import { addCompagny, deleteCompagny, getCompagnies, getCompagny, updateCompagny } from '../controllers/compagnies.js';


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

export default router;
