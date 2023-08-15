import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.newProduct);
productsRouter.get('/products', productsController.allProducts);

export default productsRouter;