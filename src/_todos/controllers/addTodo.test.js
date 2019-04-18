import "@babel/polyfill";

import addTodoController from "./addTodo";

jest.mock("../models/todos", () => {
  const doc = {
    _id: "5cb834b2d3632b5c51adaf5e",
    text: "Koa",
  };
  return {
    create: jest.fn(() => Promise.resolve(doc)),
  };
});

describe("_todos/controllers", () => {
  test("addTodo", async () => {
    const text = "Koa";
    const ctx = { request: { body: { text } } };

    await addTodoController(ctx);

    expect(ctx.body).toMatchObject({
      _id: "5cb834b2d3632b5c51adaf5e",
      text,
    });
  });
});
