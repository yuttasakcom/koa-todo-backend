import Todo from "../models/todos";

export default async ctx => {
  const todo = new Todo({ todo: ctx.request.body.todo });
  ctx.body = await todo.save();
};
