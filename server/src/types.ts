import type { Context as ElysiaContext } from "elysia";
import type { TObject } from "@sinclair/typebox";
import type { Decorators } from "./decorators";
import type { Logger } from "@bogeychan/elysia-logger/src/types";

export type Context<Hooks extends Record<string, TObject> = {}> = Decorators &
  ElysiaContext & { [Key in keyof Hooks]: Hooks[Key]["static"] } & {
    log: Logger;
  };
