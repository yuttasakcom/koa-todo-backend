import Router from "koa-router";

const router = new Router();

router.get("/todos", async ctx => {
  ctx.body = "GET todos";
});

router.get("/todos/:id", async ctx => {
  ctx.body = `GET todos/${ctx.params.id}`;
});

router.post("/todos", async ctx => {
  ctx.body = `todo = ${ctx.request.body.todo}`;
});

router.put("/todos/:id", async ctx => {
  ctx.body = `id = ${ctx.params.id} todo = ${ctx.request.body.todo}`;
});

router.delete("/todos/:id", async ctx => {
  ctx.body = `id = ${ctx.params.id}`;
});

export default router.routes();
