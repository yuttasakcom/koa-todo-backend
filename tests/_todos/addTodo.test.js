import request from "supertest";
import server from "../../src";

import Todo from "../../src/_todos/models/todos";

beforeEach(async () => {
  await Todo.deleteMany();
});

afterEach(() => {
  server.close();
});

describe("_todos", () => {
  it("addTodo success", async () => {
    const text = "integration Koa";
    const response = await request(server)
      .post("/api/todos")
      .send({ text });
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.text).toBe(text);
    expect(Object.keys(response.body)).toEqual(
      expect.arrayContaining(["_id", "text"])
    );
  });

  it("addTodo fail text required", async () => {
    const response = await request(server).post("/api/todos");
    expect(response.status).toBe(400);
    expect(response.type).toBe("text/plain");
    expect(response.text).toBe("text required");
  });
});
