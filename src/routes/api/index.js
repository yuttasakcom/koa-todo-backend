import Router from "koa-router";
import todos from "./todos";

const api = new Router();

api.use(todos);

export default api.routes();
