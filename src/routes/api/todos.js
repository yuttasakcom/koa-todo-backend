import Router from "koa-router";
import todosController from "../../_todos/controllers";

const router = new Router();

router.get("/todos", todosController.getTodos);
router.get("/todos/:id", todosController.getTodo);
router.post("/todos", todosController.addTodo);
router.put("/todos/:id", todosController.editTodo);
router.delete("/todos/:id", todosController.removeTodo);

export default router.routes();
