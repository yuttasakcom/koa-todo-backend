import Todo from "../models/todos";

export default async ctx => {
  ctx.body = await Todo.create({ todo: ctx.request.body.todo });
};
