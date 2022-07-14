import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { Fonts } from "@components/Fonts";
import { theme } from "@styles/theme";
import { GamificationBrain } from "brain";
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import { linkResolver, repositoryName } from "../../prismicio";
import TopBarProgress from "nextjs-progressbar";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <Fonts />
            <TopBarProgress
              color="linear-gradient(to right, #FF8008, #FFC837)"
              height={3}
            />
            <Component {...pageProps} />
            <GamificationBrain />
          </Provider>
        </ChakraProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
