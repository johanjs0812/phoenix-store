"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.Delete = exports.add = exports.getById = exports.getAll = void 0;
const user_1 = require("../models/user");
const uuid_1 = require("uuid");
const collectionInstance = new user_1.Users();
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield collectionInstance.fetchAll();
        if (!allProducts) {
            console.error('Không thể lấy dữ liệu ');
            return res.status(500).json({ error: 'Không thể lấy dữ liệu ' });
        }
        res.json(allProducts);
    }
    catch (err) {
        console.error('Không thể lấy dữ liệu ', err);
        res.status(500).json({ error: 'Không thể lấy dữ liệu ' });
    }
});
exports.getAll = getAll;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield collectionInstance.getId(req.params.id);
        if (!product) {
            console.error('Không thể tìm thấy ');
            return res.status(404).json({ error: 'Không thể tìm thấy ' });
        }
        res.json(product);
    }
    catch (err) {
        console.error('Không thể tìm thấy ', err);
        res.status(500).json({ error: 'Không thể tìm thấy ' });
    }
});
exports.getById = getById;
const add = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        data.id = (0, uuid_1.v4)();
        const respondata = yield collectionInstance.add(data);
        if (!respondata) {
            console.error('Không thể tạo mới ');
            return res.status(500).json({ error: 'Không thể tạo mới ' });
        }
        res.json(respondata);
    }
    catch (err) {
        console.error('Không thể tạo mới ', err);
        res.status(500).json({ error: 'Không thể tạo mới ' });
    }
});
exports.add = add;
const Delete = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCategory = yield collectionInstance.delete(id);
        if (!deletedCategory) {
            console.error('Không thể xóa category');
            return res.status(500).json({ error: 'Không thể xóa ' });
        }
        res.json({ message: 'Category đã được xóa thành công' });
    }
    catch (err) {
        console.error('Không thể xóa category', err);
        res.status(500).json({ error: 'Không thể xóa ' });
    }
});
exports.Delete = Delete;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedCategory = yield collectionInstance.update(id, updatedData);
        if (!updatedCategory) {
            console.error('Không thể cập nhật ');
            return res.status(500).json({ error: 'Không thể cập nhật ' });
        }
        res.json(updatedCategory);
    }
    catch (err) {
        console.error('Không thể cập nhật category', err);
        res.status(500).json({ error: 'Không thể cập nhật' });
    }
});
exports.update = update;
