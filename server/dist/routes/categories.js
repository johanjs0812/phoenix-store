"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_1 = require("../controller/categories");
const cateRouter = express_1.default.Router();
cateRouter.get('/phoenix/categories', categories_1.getAll);
cateRouter.get('/phoenix/categories/:id', categories_1.getById);
cateRouter.post('/phoenix/categories/add', categories_1.add);
cateRouter.delete('/phoenix/categories/delete/:id', categories_1.deleteCategory);
cateRouter.put('/phoenix/categories/edit/:id', categories_1.updateCategory);
exports.default = cateRouter;
