import "@babel/polyfill";
import Koa from "koa";
import helmet from "koa-helmet";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import mongoose from "mongoose";
import routes from "./routes";

import "./utils/cache";

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/koa";
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Mongodb connected `, mongoURI))
  .catch(err => {
    console.log(`Mongodb not connect ${mongoURI}`, err);
  });

const app = new Koa();
app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(logger());
app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;
