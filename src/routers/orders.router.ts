import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/orders', ordersController.showAllOrders);

export default ordersRouter;