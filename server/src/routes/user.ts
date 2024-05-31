import express from 'express';
import { getAll, add, Delete, update, getById} from '../controller/user';

const userRouter = express.Router();

userRouter.get('/phoenix/users', getAll);

userRouter.get('/phoenix/users/:id', getById);

userRouter.post('/phoenix/users/add', add);

userRouter.delete('/phoenix/users/delete/:id', Delete);

userRouter.put('/phoenix/users/edit/:id', update);

export default userRouter;
