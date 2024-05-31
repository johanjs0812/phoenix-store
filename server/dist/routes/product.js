"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../controller/product");
const cateProduct = express_1.default.Router();
cateProduct.get('/phoenix/products', product_1.getAll);
cateProduct.get('/phoenix/products/:id', product_1.getById);
cateProduct.post('/phoenix/products/add', product_1.add);
cateProduct.delete('/phoenix/products/delete/:id', product_1.Delete);
cateProduct.put('/phoenix/products/edit/:id', product_1.update);
exports.default = cateProduct;
