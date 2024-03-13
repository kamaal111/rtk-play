import type { APIError, ErrorHandlerParams } from "../errors";

type Errors = typeof errors;
type ErrorKeys = keyof Errors;

export class UserAlreadyExists extends Error implements APIError {
  statusCode = 409;

  constructor() {
    super("User already exists");
  }
}

export class Unauthorized extends Error implements APIError {
  statusCode = 401;

  constructor() {
    super("Unauthorized");
  }
}

const errors = {
  UserAlreadyExists,
  Unauthorized,
};

function handler<UsersError extends APIError & Errors[ErrorKeys]>(
  error: UsersError
) {
  return ({ error: errorHandlerError, set }: ErrorHandlerParams) => {
    if (!(errorHandlerError instanceof error)) return;

    set.status = errorHandlerError.statusCode;
    return { details: errorHandlerError.message };
  };
}

export const errorHandlers = (
  Object.entries(errors) as [ErrorKeys, Errors[ErrorKeys] & APIError][]
).reduce<
  Record<ErrorKeys, (params: ErrorHandlerParams) => { details: string }>
>((acc, [errorKey, error]) => {
  return { ...acc, [errorKey]: handler(error) };
}, {} as Record<ErrorKeys, (params: ErrorHandlerParams) => { details: string }>);

export default errors;
