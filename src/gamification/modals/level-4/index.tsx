import { Heading, Stack, Text, Image, Center } from "@chakra-ui/react";
import { Lottie } from "@components/Lottie";
import LevelUp from "@lotties/level-up.json";
import FancyText from "@carefully-coded/react-text-gradient";
import { useResponsive } from "@hooks/use-responsive";
import { useMemo } from "react";

export function GamificationModalLevel4() {
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
      <Text fontWeight="medium" fontFamily="Bungee" color="white">
        Você alcançou o nível 4!
      </Text>
      <Center>
        <Image
          borderRadius="lg"
          boxShadow="dark-lg"
          maxW="10rem"
          w="100%"
          height="auto"
          src="images/level-4-help.png"
          alt="foguete clicado mostrando o menu"
        />
      </Center>
      <Text fontWeight="medium" fontFamily="Heebo" color="white">
        Agora você pode escutar músicas calmas enquanto navega e poderá ajustar
        as configurações no player abaixo
      </Text>
    </Stack>
  );
}
