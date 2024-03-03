import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";

import health from "./health";
import decorators from "./decorators";

const app = new Elysia({ prefix: "/api/v1" })
  .decorate(decorators)
  .use(cors())
  .use(swagger())
  .use(health())
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
