import { Elysia } from "elysia";

import signUp from "./handlers/sign-up";
import login from "./handlers/login";

const users = new Elysia({ prefix: "/user" })
  .post("/sign-up", signUp.handler, signUp.hooks)
  .post("/login", login.handler, login.hooks);

export default users;
