import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "@/constants";

type SignUpResponse = { details: string };

type SignUpPayload = { email: string; password: string };

export const reducerPath = "users-api";

const baseQuery = fetchBaseQuery({
  baseUrl: new URL("user/", API_BASE_URL).toString(),
});

const usersAPI = createApi({
  reducerPath,
  baseQuery,
  endpoints(builder) {
    return {
      signUp: builder.mutation<SignUpResponse, SignUpPayload>({
        query: (payload) => ({ url: "sign-up", method: "POST", body: payload }),
      }),
    };
  },
});

export const { reducer, middleware } = usersAPI;

export default usersAPI;
