import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASIC_ROOT } from "@const";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: BASIC_ROOT }),
  endpoints: (build) => ({
    signup: build.mutation({
      query: (body) => ({
        url: "us-phone-register",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const { useSignupMutation } = userApi;
