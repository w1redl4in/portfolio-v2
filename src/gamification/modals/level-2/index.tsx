import { Heading, Stack, Text } from "@chakra-ui/react";
import { Lottie } from "@components/Lottie";
import LevelUp from "@lotties/level-up.json";
import FancyText from "@carefully-coded/react-text-gradient";
import { useResponsive } from "@hooks/use-responsive";
import { useMemo } from "react";

export function GamificationModalLevel2() {
  const { isMobile } = useResponsive();

  const lottieWidthAndHeight = useMemo(() => {
    if (isMobile) return 150;
    return 200;
  }, [isMobile]);

  return (
    <Stack textAlign="center">
      <Lottie
        animationData={LevelUp}
        width={lottieWidthAndHeight}
        height={lottieWidthAndHeight}
        speed={10}
      />
      <Heading fontFamily="Bungee" color="yellow.400" size="lg">
        <FancyText
          gradient={{ from: "#FFE259", to: "#FFA751", type: "linear" }}
          animate
          animateDuration={500}
        >
          Level Up!
        </FancyText>
      </Heading>
      <Text fontFamily="Bungee" color="white">
        Você alcançou o nível 2!
      </Text>
      <Text fontFamily="Heebo" color="white">
        Agora conseguirá ver as tecnologias que mais gosto <br />
        flutuando pelo site.
      </Text>
      <Text fontFamily="Heebo" color="white">
        Divirta-se!
      </Text>
    </Stack>
  );
}
