import { ValidationError, type ErrorHandler } from "elysia";

import usersErrors, {
  errorHandlers as usersErrorHandlers,
} from "../users/errors";

export const errors = {
  ...usersErrors,
};

type Errors = Record<keyof typeof errors, Error>;
export type ErrorHandlerParams = Parameters<ErrorHandler<Errors>>[0];
type ErrorCodes = ErrorHandlerParams["code"];

export interface APIError {
  statusCode: number;
  message: string;
}

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

const errorHandlers: Partial<
  Record<ErrorCodes, (params: ErrorHandlerParams) => object | undefined>
> = {
  ...usersErrorHandlers,
  VALIDATION: handleValidationError,
};

function errorValidator(params: ErrorHandlerParams) {
  return (
    errorHandlers[params.code]?.(params) ?? { details: "Something went wrong" }
  );
}

export default errorValidator;
