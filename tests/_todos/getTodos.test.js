import request from "supertest";
import server from "../../src";

import Todo from "../../src/_todos/models/todos";

const todos = [
  {
    text: "Todo1",
  },
  {
    text: "Todo2",
  },
  {
    text: "Todo3",
  },
];

beforeEach(async () => {
  await Todo.deleteMany();
  await Todo.insertMany(todos);
});

afterEach(() => {
  server.close();
});

describe("_todos", () => {
  it("getTodos success", async () => {
    const response = await request(server).get("/api/todos");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.length).toBe(3);
    expect(response.body[0].text).toBe(todos[0].text);
    expect(response.body[1].text).toBe(todos[1].text);
    expect(response.body[2].text).toBe(todos[2].text);
  });
});
