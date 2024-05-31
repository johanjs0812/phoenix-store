import { Products } from '../models/product';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const collectionInstance = new Products();

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allProducts = await collectionInstance.fetchAll();

        if (!allProducts) {
            console.error('Không thể lấy dữ liệu category');
            return res.status(500).json({ error: 'Không thể lấy dữ liệu category' });
        }

        res.json(allProducts);
    } catch (err) {
        console.error('Không thể lấy dữ liệu category', err);
        res.status(500).json({ error: 'Không thể lấy dữ liệu category' });
    }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await collectionInstance.getId(req.params.id);

        if (!product) {
            console.error('Không thể tìm thấy category');
            return res.status(404).json({ error: 'Không thể tìm thấy category' });
        }

        res.json(product);
    } catch (err) {
        console.error('Không thể tìm thấy category', err);
        res.status(500).json({ error: 'Không thể tìm thấy category' });
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = req.body;
        data.id = uuidv4(); 

        const respondata = await collectionInstance.add(data);

        if (!respondata) {
            console.error('Không thể tạo mới ');
            return res.status(500).json({ error: 'Không thể tạo mới ' });
        }

        res.json(respondata);
    } catch (err) {
        console.error('Không thể tạo mới ', err);
        res.status(500).json({ error: 'Không thể tạo mới ' });
    }
};

export const Delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const deletedCategory = await collectionInstance.delete(id);

        if (!deletedCategory) {
            console.error('Không thể xóa category');
            return res.status(500).json({ error: 'Không thể xóa category' });
        }

        res.json({ message: 'Category đã được xóa thành công' });
    } catch (err) {
        console.error('Không thể xóa category', err);
        res.status(500).json({ error: 'Không thể xóa category' });
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedCategory = await collectionInstance.update(id, updatedData);

        if (!updatedCategory) {
            console.error('Không thể cập nhật category');
            return res.status(500).json({ error: 'Không thể cập nhật category' });
        }

        res.json(updatedCategory);
    } catch (err) {
        console.error('Không thể cập nhật category', err);
        res.status(500).json({ error: 'Không thể cập nhật category' });
    }
};
