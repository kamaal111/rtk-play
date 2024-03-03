import { Elysia, t } from "elysia";

import signUp from "./handlers/sign-up";

const users = new Elysia({ prefix: "/user" }).post(
  signUp.path,
  signUp.handler,
  signUp.hooks
);

export default users;
