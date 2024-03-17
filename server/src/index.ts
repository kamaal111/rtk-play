import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { logger } from "@bogeychan/elysia-logger";

import health from "./health";
import decorators from "./decorators";
import users from "./users/users";
import errorValidator, { errors } from "./errors";

const app = new Elysia({ prefix: "/api/v1" })
  .decorate(decorators)
  .error(errors)
  .use(cors())
  .use(swagger())
  .use(logger())
  .onError(errorValidator)
  .use(health)
  .use(users)
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
