import Todo from "../models/todos";
import mongoose from "mongoose";
import { clearHash } from "../../utils/cache";

export default async ctx => {
  const todo = await Todo.findById(mongoose.Types.ObjectId(ctx.params.id));

  if (!todo) ctx.throw(404);

  const result = await todo.remove();
  clearHash("todos");
  ctx.body = result;
};
