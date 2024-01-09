"use client";

import { theme } from "@/lib/app_theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ChakraProvider cssVarsRoot="body" theme={theme}>
        {children}
      </ChakraProvider>
    </Provider>
  );
}
