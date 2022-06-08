import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { GamificationModalRoot } from "@gamification/index";
import { Provider } from "react-redux";
import { store } from "@redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
        <GamificationModalRoot />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
