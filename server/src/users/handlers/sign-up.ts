import { t } from "elysia";

import { UserAlreadyExists } from "../errors";

import type { Context } from "../../types";

const path = "/sign-up";

const hooks = {
  body: t.Object({
    email: t.String({ format: "email", default: null }),
    password: t.String({ minLength: 5 }),
  }),
};

async function handler({ db, body }: Context<typeof hooks>) {
  const { email, password } = body;
  const existingUser = await db.user.findFirst({
    where: { email },
  });
  if (existingUser) throw new UserAlreadyExists();

  const hashedPassword = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 8,
  });
  const user = await db.user.create({
    data: { password: hashedPassword, email },
  });
  return { details: user };
}

const signUp = {
  path,
  hooks,
  handler,
};

export default signUp;