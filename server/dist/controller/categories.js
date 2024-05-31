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
exports.updateCategory = exports.deleteCategory = exports.add = exports.getById = exports.getAll = void 0;
const categories_1 = require("../models/categories");
const uuid_1 = require("uuid");
const collectionInstance = new categories_1.Category();
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield collectionInstance.fetchAll();
        if (!allProducts) {
            console.error('Không thể lấy dữ liệu category');
            return res.status(500).json({ error: 'Không thể lấy dữ liệu category' });
        }
        res.json(allProducts);
    }
    catch (err) {
        console.error('Không thể lấy dữ liệu category', err);
        res.status(500).json({ error: 'Không thể lấy dữ liệu category' });
    }
});
exports.getAll = getAll;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield collectionInstance.getId(req.params.id);
        if (!product) {
            console.error('Không thể tìm thấy category');
            return res.status(404).json({ error: 'Không thể tìm thấy category' });
        }
        res.json(product);
    }
    catch (err) {
        console.error('Không thể tìm thấy category', err);
        res.status(500).json({ error: 'Không thể tìm thấy category' });
    }
});
exports.getById = getById;
const add = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        data.id = (0, uuid_1.v4)();
        data.cre = new Date();
        data.up = new Date();
        let formatcre = data.cre.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        data.cre = formatcre;
        data.up = formatcre;
        const respondata = yield collectionInstance.add(data);
        if (!respondata) {
            console.error('Không thể tạo mới category');
            return res.status(500).json({ error: 'Không thể tạo mới category' });
        }
        res.json(respondata);
    }
    catch (err) {
        console.error('Không thể tạo mới category', err);
        res.status(500).json({ error: 'Không thể tạo mới category' });
    }
});
exports.add = add;
const deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCategory = yield collectionInstance.delete(id);
        if (!deletedCategory) {
            console.error('Không thể xóa category');
            return res.status(500).json({ error: 'Không thể xóa category' });
        }
        res.json({ message: 'Category đã được xóa thành công' });
    }
    catch (err) {
        console.error('Không thể xóa category', err);
        res.status(500).json({ error: 'Không thể xóa category' });
    }
});
exports.deleteCategory = deleteCategory;
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        updatedData.up = new Date();
        let format = updatedData.up.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        updatedData.up = format;
        const updatedCategory = yield collectionInstance.update(id, updatedData);
        if (!updatedCategory) {
            console.error('Không thể cập nhật category');
            return res.status(500).json({ error: 'Không thể cập nhật category' });
        }
        res.json(updatedCategory);
    }
    catch (err) {
        console.error('Không thể cập nhật category', err);
        res.status(500).json({ error: 'Không thể cập nhật category' });
    }
});
exports.updateCategory = updateCategory;
