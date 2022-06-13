import { useMediaQuery } from "@chakra-ui/react";

// mobileS: "320px",
// mobileM: "375px",
// mobileL: "425px",
// tablet: "768px",
// laptop: "1024px",
// laptopL: "1440px",
// desktop: "2560px",
export function useResponsive() {
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isHD] = useMediaQuery("(max-width: 1280px)");
  const [isFullHD] = useMediaQuery("(max-width: 1920px)");

  return {
    isMobile,
    isTablet,
    isHD,
    isFullHD,
  };
}
