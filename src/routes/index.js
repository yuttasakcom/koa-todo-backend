import Router from "koa-router";
import api from "./api";

const router = new Router();

router.use("/api", api);

export default router;
