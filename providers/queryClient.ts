import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  // if toast is appers multiple time look for way to stop it
  toast(title);
}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
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
  });
}

export const queryClient = generateQueryClient();
