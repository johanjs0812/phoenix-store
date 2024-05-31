import express from 'express';
import { getAll, add, deleteCategory, updateCategory, getById} from '../controller/categories';

const cateRouter = express.Router();

cateRouter.get('/phoenix/categories', getAll);

cateRouter.get('/phoenix/categories/:id', getById);

cateRouter.post('/phoenix/categories/add', add);

cateRouter.delete('/phoenix/categories/delete/:id', deleteCategory);

cateRouter.put('/phoenix/categories/edit/:id', updateCategory);

export default cateRouter;
