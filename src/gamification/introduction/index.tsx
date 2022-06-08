import { Text, Stack, Icon, HStack } from "@chakra-ui/react";
import {
  FaGamepad,
  AiTwotoneExperiment,
  FiArrowUp,
  FaStopwatch,
  AiFillCloseCircle,
} from "@icons";
import { useMemo } from "react";
export function GamificationIntroductionModal() {
  const icons = useMemo(() => {
    return [
      {
        text: "Este site é construído utilizando um sistema chamado de gamificação.",
        icon: FaGamepad,
        color: "red.400",
      },
      {
        text: "Você ganhará exp durante a navegação e liberará novas áreas e efeitos para conhecer mais sobre mim.",
        icon: AiTwotoneExperiment,
        color: "blue.400",
      },

      {
        text: "Logo acima no cabeçalho você verá sua barra de experiência juntamente com o seu nível.",
        icon: FiArrowUp,
        color: "gray.400",
      },
      {
        text: "Para cada segundo de navegação você ganhará 10 pontos de exp, boa sorte e ótima navegação!",
        icon: FaStopwatch,
        color: "orange.400",
      },
      {
        text: "Os pontos só começarão a contabilizar após fechar o modal.",
        icon: AiFillCloseCircle,
        color: "green.400",
      },
    ];
  }, []);

  return (
    <Stack>
      {icons.map((icon) => (
        <HStack textAlign="center" key={icon.text}>
          <Text>
            {icon.text}&nbsp;
            <Icon color={icon.color} w={6} h={6} as={icon.icon} />
          </Text>
        </HStack>
      ))}
    </Stack>
  );
}
