import type { Decorators } from "../../types";

async function ping({}: Decorators) {
  return { details: "pong" };
}

export default ping;
