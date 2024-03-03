import { t } from "elysia";

import { UserAlreadyExists } from "../errors";

import type { Context } from "../../types";

const path = "/sign-up";

const hooks = {
  body: t.Object({
    email: t.String({ format: "email", default: null }),
  }),
};

async function handler({ db, set, body }: Context<typeof hooks>) {
  const existingUser = await db.user.findFirst({
    where: { email: body.email },
  });
  if (existingUser) throw new UserAlreadyExists();

  return { details: body.email };
}

const signUp = {
  path,
  hooks,
  handler,
};

export default signUp;
