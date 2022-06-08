import { Box, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="10rem"
      background="blackAlpha.800"
      as="footer"
    >
      <Text color="white">
        Todos os direitos reservados - {new Date().getFullYear()}
      </Text>
    </Box>
  );
}
