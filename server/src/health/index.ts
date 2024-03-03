import { Elysia } from "elysia";

import ping from "./handlers/ping";

const health = new Elysia({ prefix: "/health" }).get("/ping", ping);

export default health;
