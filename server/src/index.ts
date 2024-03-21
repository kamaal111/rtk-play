import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import jwt from "@elysiajs/jwt";
import { logger } from "@bogeychan/elysia-logger";

import health from "./health";
import decorators from "./decorators";
import users from "./users/users";
import errorValidator, { errors } from "./errors";
import { loadEnvs } from "./utils/envs";
import cors from "./cors";

const { JWT_SECRET } = loadEnvs();

const app = new Elysia({ prefix: "/api/v1" })
  .decorate(decorators)
  .error(errors)
  .use(jwt({ name: "jwt", secret: JWT_SECRET }))
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
