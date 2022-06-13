import { Flex } from "@chakra-ui/react";
// import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { useCountExperience } from "hooks/use-count-experience";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
  useCountExperience();

  return (
    <Flex
      background="background"
      justifyContent="space-between"
      flexDirection="column"
      minH="100vh"
      w="100%"
    >
      <Header />
      {children}
      {/* <Footer /> */}
    </Flex>
  );
}
