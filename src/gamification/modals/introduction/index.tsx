import { Text, Stack, Flex } from "@chakra-ui/react";
import { Lottie } from "@components/Lottie";
import { useResponsive } from "@hooks/use-responsive";
import Attention from "@lotties/attention.json";
import { useMemo } from "react";
export function GamificationIntroductionModal() {
  const { isMobile } = useResponsive();

  const lottieWidthAndHeight = useMemo(() => {
    if (isMobile) return 75;
    return 100;
  }, [isMobile]);

  return (
    <Stack textAlign="center">
      <Lottie
        animationData={Attention}
        width={lottieWidthAndHeight}
        height={lottieWidthAndHeight}
        loop
      />
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
