export default async ctx => {
  ctx.body = `id = ${ctx.params.id} todo = ${ctx.request.body.todo}`;
};
