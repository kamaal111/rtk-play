import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "@/constants";

export const reducerPath = "users-api";

const baseQuery = fetchBaseQuery({
  baseUrl: new URL("user/", API_BASE_URL).toString(),
});

const usersAPI = createApi({
  reducerPath,
  baseQuery,
  endpoints(builder) {
    return {
      signUp: builder.mutation<
        { details: string },
        { email: string; password: string }
      >({
        query: (payload) => ({ url: "sign-up", method: "POST", body: payload }),
      }),
      login: builder.mutation<
        { details: string },
        { email: string; password: string }
      >({
        query: (payload) => ({ url: "login", method: "POST", body: payload }),
      }),
    };
  },
});

export default usersAPI;
