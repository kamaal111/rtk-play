import { Elysia } from "elysia";

import ping from "./handlers/ping";

function health() {
  return new Elysia({ prefix: "/health" }).get("/ping", ping);
}

export default health;
