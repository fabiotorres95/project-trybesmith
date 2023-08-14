import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function showAllOrders(_req: Request, res: Response) {
  const result = await ordersService.getAllOrders();
  return res.status(200).json(result);
}

export default {
  showAllOrders,
};