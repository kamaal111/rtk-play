import { t } from "elysia";
import { password } from "bun";

import type { Context } from "../../types";
import { Unauthorized } from "../errors";

const hooks = {
  body: t.Object({
    email: t.String({ format: "email", default: null }),
    password: t.String({ minLength: 5 }),
  }),
};

async function handler({ body, db }: Context<typeof hooks>) {
  const { email, password: payloadPassword } = body;
  const user = await db.user.findFirst({
    where: { email },
  });
  if (user == null) throw new Unauthorized();

  const isValid = await password.verify(payloadPassword, user.password);
  if (!isValid) throw new Unauthorized();

  return { details: "Successfully logged in" };
}

const login = {
  hooks,
  handler,
};

export default login;
