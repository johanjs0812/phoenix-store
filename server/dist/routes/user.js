"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const userRouter = express_1.default.Router();
userRouter.get('/phoenix/users', user_1.getAll);
userRouter.get('/phoenix/users/:id', user_1.getById);
userRouter.post('/phoenix/users/add', user_1.add);
userRouter.delete('/phoenix/users/delete/:id', user_1.Delete);
userRouter.put('/phoenix/users/edit/:id', user_1.update);
exports.default = userRouter;
