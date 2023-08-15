import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

async function getAllOrders() : Promise<Order[]> {
  const allOrders = await OrderModel.findAll();
  const allProducts = await ProductModel.findAll();

  const newOrders = allOrders.map((order) => {
    const newOrder = order.dataValues;
    newOrder.productIds = [];
    return newOrder;
  });

  allProducts.map((prod) => { 
    const { id, orderId } = prod.dataValues;
    const idArray = newOrders[orderId - 1].productIds as number[];
    idArray.push(id);
    return null;
  });

  return newOrders;
}

export default {
  getAllOrders,
};