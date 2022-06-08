import Image from "next/image";
import { Flex, Text, Progress } from "@chakra-ui/react";
import { Navigation } from "@components/Navigation";

export function Header() {
  return (
    <Flex alignItems="center" justifyContent="space-between" p={6}>
      <Flex
        justifyContent="space-around"
        width="12rem"
        mr={2}
        alignItems="center"
      >
        <Image
          style={{ borderRadius: "50%" }}
          width="50px"
          height="50px"
          src="https://github.com/w1redl4in.png"
          alt="minha imagem"
        />
        <Text>Felipe Austríaco</Text>
      </Flex>

      <Flex textAlign="center" minW="20rem" flexDirection="column">
        <Text color="yellow.500" fontWeight="extrabold" colorScheme="yellow">
          NIVEL 1
        </Text>
        <Progress
          mt={1}
          borderRadius="20px"
          colorScheme="yellow"
          min={0}
          max={100}
          hasStripe
          isAnimated
          value={80}
        />
      </Flex>

      <Navigation />
    </Flex>
  );
}
