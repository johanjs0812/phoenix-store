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
exports.connectToDb = void 0;
const fs_1 = __importDefault(require("fs"));
const database = "src/data/phoenix.json";
function connectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Connecting to the database...');
        try {
            const data = yield fs_1.default.promises.readFile(database, 'utf8');
            console.log('Database is connected successfully !');
            return JSON.parse(data);
        }
        catch (err) {
            console.error('Failed to connect to JSON database', err);
        }
    });
}
exports.connectToDb = connectToDb;
;
