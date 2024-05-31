import express from 'express';
import { getAll, add, update, getById} from '../controller/orders';

const orderRouter = express.Router();

orderRouter.get('/phoenix/orders', getAll);

orderRouter.get('/phoenix/orders/:id', getById);

orderRouter.post('/phoenix/orders/add', add);

orderRouter.put('/phoenix/orders/edit/:id', update);

export default orderRouter;