import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "#0E0E10",
    modalBackground: "#151417",
    brand: "#FFD858",
    textSecondary: "#8F9BA8",
  },
  styles: {
    global: {
      body: {
        bg: "background",
      },
    },
  },
});
