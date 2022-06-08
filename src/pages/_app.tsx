import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { GamificationModalRoot } from "gamification/modals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <GamificationModalRoot />
    </ChakraProvider>
  );
}

export default MyApp;
