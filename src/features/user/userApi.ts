import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useSWR from "swr";
import { Users } from "./type";

// RTKQuery で書いたデータフェッチのサンプル 18行目まで
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => `users`,
    }),
  }),
});

// use + endpointsで設定した名前 + QueryでHooksが作られる
export const { useGetUsersQuery } = userApi;

// SWRで書いたデータフェッチのサンプル 25行目まで
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export const useUsers = () =>
  useSWR<Users>("https://jsonplaceholder.typicode.com/users", fetcher);
