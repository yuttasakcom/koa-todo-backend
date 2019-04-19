import "@babel/polyfill";
import Koa from "koa";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import mongoose from "mongoose";
import routes from "./routes";

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/koa", {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Mongodb connected `, process.env.MONGO_URI))
  .catch(err => {
    console.log(`Mongodb not connect ${process.env.MONGO_URI}`, err);
  });

const app = new Koa();
app.use(helmet());
app.use(bodyParser());
app.use(logger());
app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;
