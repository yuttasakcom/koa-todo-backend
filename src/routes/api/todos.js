import Router from "koa-router";

const router = new Router();

router.get("/todos", async ctx => {
  ctx.body = "GET todos";
});

export default router.routes();
