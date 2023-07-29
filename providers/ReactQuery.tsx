"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  function queryErrorHandler(error: unknown): void {
    // error is type unknown because in js, anything can be an error (e.g. throw(5))
    const title =
      error instanceof Error ? error.message : "error connecting to server";

    // if toast is appers multiple time look for way to stop it
    toast(title);
  }

  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          onError: queryErrorHandler,
          staleTime: 3000000, // 50 mins to refetch
          cacheTime: 3600000, // 60 mins for cache data
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
