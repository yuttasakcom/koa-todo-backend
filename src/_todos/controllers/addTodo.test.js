import "@babel/polyfill";

import addTodoController from "./addTodo";

jest.mock("../models/todos", () => {
  const doc = {
    _id: "5cb834b2d3632b5c51adaf5e",
    todo: "Koa",
  };
  return {
    create: jest.fn(() => Promise.resolve(doc)),
  };
});

test("_todos/controllers/addTodo", async () => {
  const ctx = { request: { body: { todo: "Koa" } } };

  await addTodoController(ctx);

  expect(ctx.body).toMatchObject({
    _id: "5cb834b2d3632b5c51adaf5e",
    todo: "Koa",
  });
});
