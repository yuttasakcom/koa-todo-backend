import "@babel/polyfill";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import routes from "./routes";

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/koa", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Mongodb connected."))
  .catch(err => {
    console.log(`Mongodb not connect `, err);
  });

const app = new Koa();

app.use(bodyParser());
app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;
