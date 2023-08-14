import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';

async function getAllOrders() : Promise<OrderSequelizeModel[]> {
  const allOrders = await OrderModel.findAll();

  return allOrders;
}

export default {
  getAllOrders,
};