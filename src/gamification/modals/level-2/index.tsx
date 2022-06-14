import { Heading, Stack, Text } from "@chakra-ui/react";

export function GamificationModalLevel2() {
  return (
    <Stack textAlign="center">
      <Heading color="yellow.400" size="lg">
        Level up!
      </Heading>
      <Text color="white">Você alcançou o nível 2!</Text>

      <Text color="white">
        Agora conseguirá ver as tecnologias que mais gosto <br />
        flutuando pelo site.
      </Text>

      <Text color="white">Divirta-se!</Text>
    </Stack>
  );
}
