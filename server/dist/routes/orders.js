"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_1 = require("../controller/orders");
const orderRouter = express_1.default.Router();
orderRouter.get('/phoenix/orders', orders_1.getAll);
orderRouter.get('/phoenix/orders/:id', orders_1.getById);
orderRouter.post('/phoenix/orders/add', orders_1.add);
orderRouter.put('/phoenix/orders/edit/:id', orders_1.update);
exports.default = orderRouter;
