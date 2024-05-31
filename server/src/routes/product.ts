import express from 'express';
import { getAll, add, Delete, update, getById} from '../controller/product';

const cateProduct = express.Router();

cateProduct.get('/phoenix/products', getAll);

cateProduct.get('/phoenix/products/:id', getById);

cateProduct.post('/phoenix/products/add', add);

cateProduct.delete('/phoenix/products/delete/:id', Delete);

cateProduct.put('/phoenix/products/edit/:id', update);

export default cateProduct;
