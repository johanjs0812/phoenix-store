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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseData = void 0;
const fs_1 = __importDefault(require("fs"));
class BaseData {
    constructor(collectionName) {
        this.filePath = 'src/data/phoenix.json';
        this.collectionName = collectionName;
        this.data = this.loadData();
    }
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data;
        });
    }
    getId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.find(item => item.id === id);
        });
    }
    add(newItem) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data.push(newItem);
            this.saveData();
            return newItem;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const originalLength = this.data.length;
            this.data = this.data.filter(item => item.id !== id);
            this.saveData();
            return originalLength > this.data.length;
        });
    }
    update(id, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = this.data.find(item => item.id === id);
            if (item) {
                Object.assign(item, newData);
                this.saveData();
            }
            return item;
        });
    }
    loadData() {
        try {
            const fileContent = fs_1.default.readFileSync(this.filePath, 'utf8');
            const allData = JSON.parse(fileContent);
            return allData[this.collectionName] || [];
        }
        catch (err) {
            console.error(`Failed to load data from ${this.filePath}`, err);
            return [];
        }
    }
    saveData() {
        try {
            const fileContent = fs_1.default.readFileSync(this.filePath, 'utf8');
            const allData = JSON.parse(fileContent);
            allData[this.collectionName] = this.data;
            fs_1.default.writeFileSync(this.filePath, JSON.stringify(allData, null, 2));
        }
        catch (err) {
            console.error(`Failed to save data to ${this.filePath}`, err);
        }
    }
}
exports.BaseData = BaseData;
