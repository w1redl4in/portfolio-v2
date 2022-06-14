import { Stack, Heading, Text } from "@chakra-ui/react";

export function GamificationModalMaxLevel() {
  return (
    <Stack textAlign="center">
      <Heading color="yellow.400" size="lg">
        Level Máximo!
      </Heading>
      <Text color="white">Você alcançou o level máximo atual!</Text>

      <Text color="white">
        No momento este é o level máximo, <br /> mas sempre estarei produzindo
        mais conteúdos!
      </Text>

      <Text color="white">Espero que tenha gostado!</Text>
    </Stack>
  );
}
