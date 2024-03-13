import { Elysia } from "elysia";

import signUp from "./handlers/sign-up";

const users = new Elysia({ prefix: "/user" })
  .post("/sign-up", signUp.handler, signUp.hooks)
  .post("/login", () => {
    return { details: "Success" };
  });

export default users;
