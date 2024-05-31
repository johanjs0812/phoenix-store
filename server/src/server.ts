import express, { Express } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import cateProducts from './routes/product';
import cateRouter from "./routes/categories";
import userRouter from "./routes/user";
import orderRouter from "./routes/orders";

import {connectToDb} from './util/jsondata';

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

connectToDb()
  .then(() => console.log('Connected to JSON Database'))
  .catch((err: Error) => console.log('Error: ' + err.message));

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cateRouter);
app.use(cateProducts);
app.use(userRouter);
app.use(orderRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
