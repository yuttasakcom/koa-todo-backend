import Todo from "../models/todos";

export default async ctx => {
  ctx.body = await Todo.create({ text: ctx.request.body.text });
};
