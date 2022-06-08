import { Flex } from "@chakra-ui/react";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex justifyContent="space-between" flexDirection="column" minH="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
