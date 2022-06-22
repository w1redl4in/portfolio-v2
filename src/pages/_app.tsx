import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { Fonts } from "@components/Fonts";
import { theme } from "@styles/theme";
import { GamificationBrain } from "brain";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Fonts />
        <Component {...pageProps} />
        <GamificationBrain />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
