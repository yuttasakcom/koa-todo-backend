export default async ctx => {
  ctx.body = `todo = ${ctx.request.body.todo}`;
};
