import { Text, Stack, HStack } from "@chakra-ui/react";
import { useMemo } from "react";
export function GamificationIntroductionModal() {
  const icons = useMemo(() => {
    return [
      {
        text: "Este site é construído utilizando um sistema chamado de gamificação. 🎮",
        color: "red.400",
      },
      {
        text: "Você ganhará exp durante a navegação e liberará novas áreas e efeitos para conhecer mais sobre mim. 🧪",
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
    <Stack>
      {icons.map((icon) => (
        <HStack textAlign="center" key={icon.text}>
          <Text color="white" fontFamily="Heebo">
            {icon.text}&nbsp;
          </Text>
        </HStack>
      ))}
    </Stack>
  );
}
