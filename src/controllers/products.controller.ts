import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function newProduct(req: Request, res: Response) {
  const { name, price, orderId } = req.body;

  const result = await productsService.postNewProduct({ name, price, orderId });
  return res.status(201).json(result);
}

export default {
  newProduct,
};