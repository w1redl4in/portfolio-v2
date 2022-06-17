import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { GamificationModalRoot } from "@gamification/modals";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { Fonts } from "@components/Fonts";
import { theme } from "@styles/theme";
import { GamificationModalMaxLevel } from "@gamification/modals/max-level";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Fonts />
        <Component {...pageProps} />
        <GamificationModalMaxLevel />
        <GamificationModalRoot />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
