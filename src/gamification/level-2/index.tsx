import { Heading, Stack, Text } from "@chakra-ui/react";

export function GamificationModalLevel2() {
  return (
    <Stack textAlign="center">
      <Heading color="yellow.400" size="lg">
        Level up!
      </Heading>
      <Text>Você alcançou o nível 2!</Text>

      <Text>
        Agora conseguirá ver as tecnologias que mais gosto <br />
        flutuando pelo site.
      </Text>

      <Text>Divirta-se!</Text>
    </Stack>
  );
}
