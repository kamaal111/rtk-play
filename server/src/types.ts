import type { Context as ElysiaContext } from "elysia";
import type { TObject } from "@sinclair/typebox";
import type { Logger } from "@bogeychan/elysia-logger/src/types";

import type { Decorators } from "./decorators";

type JWTPayload = { email: string; _exp: number };

export type Context<Hooks extends Record<string, TObject> = {}> = Decorators &
  ElysiaContext & { [Key in keyof Hooks]: Hooks[Key]["static"] } & {
    log: Logger;
    jwt: {
      sign: (morePayload: JWTPayload) => Promise<string>;
      verify: (jwt?: string) => Promise<false | JWTPayload>;
    };
  };
