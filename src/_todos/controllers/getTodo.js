export default async ctx => {
  ctx.body = `GET todos/${ctx.params.id}`;
};
