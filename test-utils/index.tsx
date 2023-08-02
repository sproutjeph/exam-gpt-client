import { generateQueryClient } from "@/providers/queryClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderResult } from "@testing-library/react";
import { ReactElement } from "react";

const generateTestQueryClient = () => {
  const client = generateQueryClient();
  const options = client.getDefaultOptions();

  options.queries = { ...options.queries, retry: false };

  return client;
};

export function renderWithQueryClient(
  ui: ReactElement,
  client?: QueryClient
): RenderResult {
  const queryClient = client ?? generateTestQueryClient();

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}
