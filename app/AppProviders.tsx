"use client";

import NavigationProgressBar from "@/components/base-components/NavigationProgressBar";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import RouterProgressionContext from "@/contexts/RouterProgressionContext";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactQueryProvider } from "@/providers/ReactQuery";
import { ReduxProviders } from "@/providers/ReduxProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import NProgress from "nprogress";

function RouterEventWrapper({ children }: { children: ReactNode }) {
  const onStart = useCallback(() => NProgress.start(), []);
  const onComplete = useCallback(() => NProgress.done(), []);
  const [isChanging, setIsChanging] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const onCompleteFresh = useRef(onComplete);
  const onStartFresh = useRef(onStart);
  useEffect(() => setIsChanging(false), [pathname, searchParams]);

  useEffect(() => {
    if (isChanging) onStartFresh.current();
    else onCompleteFresh.current();
  }, [isChanging]);

  return (
    <RouterProgressionContext.Provider value={() => setIsChanging(true)}>
      {children}
    </RouterProgressionContext.Provider>
  );
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProviders>
        <RouterEventWrapper>
          <NavigationProgressBar />
          <Toaster />
          <ModalProvider />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </RouterEventWrapper>
      </ReduxProviders>
    </ReactQueryProvider>
  );
}
