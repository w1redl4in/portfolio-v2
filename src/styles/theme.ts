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
      "::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
        background: "background",
      },
      "::-webkit-scrollbar-track": {
        background: "background",
        width: "1rem",
      },
      "::-webkit-scrollbar-thumb": {
        width: "5px",
        background: "brand",
        borderRadius: "0.5rem",
      },
    },
  },
});
