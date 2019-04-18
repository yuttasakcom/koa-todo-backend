import Todo from "../models/todos";

export default async ctx => {
  if (!ctx.request.body.text) ctx.throw(400, "text required");

  ctx.body = await Todo.create({ text: ctx.request.body.text });
};
