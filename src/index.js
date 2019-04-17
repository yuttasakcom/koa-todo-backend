import Koa from "koa";
import routes from "./routes";

const port = process.env.PORT || "4000";
const app = new Koa();

app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
