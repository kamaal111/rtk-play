import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "@/constants";

const usersAPI = createApi({
  reducerPath: "users-api",
  baseQuery: fetchBaseQuery({
    baseUrl: new URL("user/", API_BASE_URL).toString(),
  }),
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
        transformResponse: (response: { details: string }, meta) => {
          for (const key of meta?.response?.headers.keys()) {
            console.log("key", key);
          }
          // console.log("meta", meta?.response?.headers.get("auth"));
          return response;
        },
      }),
    };
  },
});

export const { useLoginMutation } = usersAPI;

export default usersAPI;
