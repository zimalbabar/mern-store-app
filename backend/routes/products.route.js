import express from 'express';
import Product from '../models/product.model.js';

import { createProducts, deleteProd, getProducts, updatedProd } from '../controllers/product.controllers.js';

const router = express.Router();

export default router;

router.get("/", getProducts);

router.post("/",createProducts );

router.put("/:id", updatedProd);

router.delete("/:id" , deleteProd);