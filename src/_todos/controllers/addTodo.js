import Todo from "../models/todos";
import { clearHash } from "../../utils/cache";

export default async ctx => {
  if (!ctx.request.body.text) ctx.throw(400, "text required");

  const newTodo = await Todo.create({ text: ctx.request.body.text });
  clearHash("todos");
  ctx.body = newTodo;
};
