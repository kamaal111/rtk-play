import { ValidationError, type ErrorHandler } from "elysia";

import usersErrors, { UserAlreadyExists } from "../users/errors";

export const errors = {
  ...usersErrors,
};

type Errors = Record<keyof typeof errors, Error>;
type ErrorHandlerParams = Parameters<ErrorHandler<Errors>>[0];
type ErrorCodes = ErrorHandlerParams["code"];

function handleValidationError({ error }: ErrorHandlerParams) {
  if (!(error instanceof ValidationError)) return;

  const decodedError = JSON.parse(error.message);
  return {
    details: decodedError.message,
    additional_data: {
      expected: decodedError.expected,
      found: decodedError.found,
    },
  };
}

function handleUserAlreadyExistsError({ error }: ErrorHandlerParams) {
  if (!(error instanceof UserAlreadyExists)) return;

  return { details: error.message };
}

const errorHandlers: Partial<
  Record<ErrorCodes, (params: ErrorHandlerParams) => object | undefined>
> = {
  VALIDATION: handleValidationError,
  UserAlreadyExists: handleUserAlreadyExistsError,
};

function errorValidator(params: ErrorHandlerParams) {
  return (
    errorHandlers[params.code]?.(params) ?? { details: "Something went wrong" }
  );
}

export default errorValidator;
