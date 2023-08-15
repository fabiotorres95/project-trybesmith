import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function postNewProduct(product : ProductInputtableTypes) : Promise<Product> {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
}

async function getAllProducts() : Promise<Product[]> {
  const allProducts = await ProductModel.findAll();

  const result = allProducts.map((prod) => prod.dataValues);
  return result;
}

export default {
  postNewProduct,
  getAllProducts,
};