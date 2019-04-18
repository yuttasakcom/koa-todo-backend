import Todo from "../models/todos";
import mongoose from "mongoose";

export default async ctx => {
  const todo = await Todo.findById(mongoose.Types.ObjectId(ctx.params.id));

  if (!todo) ctx.throw(404);

  todo.todo = ctx.request.body.todo;
  ctx.body = await todo.save();
};
