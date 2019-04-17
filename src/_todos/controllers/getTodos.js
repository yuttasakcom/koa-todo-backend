import Todo from "../models/todos";

export default async ctx => {
  const todos = await Todo.find();
  ctx.body = todos;
};
