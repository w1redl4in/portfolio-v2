import { Text, Stack, HStack, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
export function GamificationIntroductionModal() {
  const icons = useMemo(() => {
    return [
      {
        text: "",
        color: "red.400",
      },
      {
        text: "Você ganhará exp durante a navegação e liberará novas áreas e efeitos para conhecer mais sobre mim. ",
        color: "blue.400",
      },

      {
        text: "Logo acima no cabeçalho você verá sua barra de experiência juntamente com o seu nível. ⬆️",
        color: "gray.400",
      },
      {
        text: "Para cada segundo de navegação você ganhará 10 pontos de exp, boa sorte e ótima navegação! ⌛",
        color: "orange.400",
      },
      {
        text: "Os pontos só começarão a contabilizar após fechar o modal. ❎",
        color: "green.400",
      },
    ];
  }, []);

  return (
    <Stack textAlign="center">
      <Text color="white" fontFamily="Heebo">
        Este site utiliza a estratégia de gamificação. 🎮
      </Text>
      <Text color="white" fontFamily="Heebo">
        Você ganhará pontos de experiência conforme a navegação e <br />
        sempre ganhará recompensas no level up! 🌟
        <br /> O que será que é? 🤔😊
      </Text>
      <Text color="white" fontFamily="Heebo">
        Logo acima no cabeçalho você verá sua barra de experiência juntamente
        com o seu level atual. ⬆️
      </Text>
      <Text color="white" fontFamily="Heebo">
        A experiência está configurada exponencialmente por level, <br /> ou
        seja, <br /> quanto maior o seu level mais experiência você ganhará! ✨
      </Text>
      <Text color="white" fontFamily="Heebo">
        Os pontos só começarão a contabilizar <br /> após fechar este modal. ❎
      </Text>
      <Flex justify="center">
        🛎️
        <Text as="del" color="white" fontFamily="Heebo">
          Você não é obrigado a esperar o seu level subir!
        </Text>
        🛎️
      </Flex>
    </Stack>
  );
}
