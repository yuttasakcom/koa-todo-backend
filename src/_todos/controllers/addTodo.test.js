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
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("addTodo success", async () => {
    const text = "Koa";
    const ctx = { request: { body: { text } } };

    await addTodoController(ctx);

    expect(ctx.body).toMatchObject({
      _id: "5cb834b2d3632b5c51adaf5e",
      text,
    });
  });

  test("addTodo fail required text", async () => {
    const ctx = {
      request: { body: { text: "" } },
      throw: (code, message) => {
        return { code, message };
      },
    };

    await addTodoController(ctx);

    expect(ctx.throw(400, "text required")).toMatchObject({
      code: 400,
      message: "text required",
    });
  });
});
