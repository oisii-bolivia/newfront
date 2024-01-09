"use client";

import { theme } from "@/lib/app_theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider cssVarsRoot="body" theme={theme}>
      {children}
    </ChakraProvider>
  );
}
