"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const product_1 = __importDefault(require("./routes/product"));
const categories_1 = __importDefault(require("./routes/categories"));
const user_1 = __importDefault(require("./routes/user"));
const orders_1 = __importDefault(require("./routes/orders"));
const jsondata_1 = require("./util/jsondata");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, jsondata_1.connectToDb)()
    .then(() => console.log('Connected to JSON Database'))
    .catch((err) => console.log('Error: ' + err.message));
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(categories_1.default);
app.use(product_1.default);
app.use(user_1.default);
app.use(orders_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
