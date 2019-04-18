import request from "supertest";
import server from "../../src";

afterEach(() => {
  server.close();
});

describe("_todos", () => {
  test("addTodo success", async () => {
    const text = "integration Koa";
    const response = await request(server)
      .post("/api/todos")
      .send({ text });
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.text).toEqual(text);
    expect(Object.keys(response.body)).toEqual(
      expect.arrayContaining(["_id", "text"])
    );
  });
});
