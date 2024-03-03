import type { Context } from "../../types";

async function ping({}: Context) {
  return { details: "pong" };
}

export default ping;
