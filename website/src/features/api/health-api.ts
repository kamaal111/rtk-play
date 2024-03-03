import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "@/constants";

type PingResponse = {
  details: "pong";
};

export const reducerPath = "health-api";

const baseQuery = fetchBaseQuery({
  baseUrl: new URL("health/", API_BASE_URL).toString(),
});

const healthAPI = createApi({
  reducerPath,
  baseQuery,
  endpoints(builder) {
    return {
      getPing: builder.query<PingResponse, void>({
        query: () => ({ url: `ping` }),
      }),
    };
  },
});

export const { reducer, middleware, useGetPingQuery } = healthAPI;

export default healthAPI;
