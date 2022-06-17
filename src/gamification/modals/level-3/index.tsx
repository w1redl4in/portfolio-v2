import { Heading, Stack, Text, Image, Center } from "@chakra-ui/react";
import { Lottie } from "@components/Lottie";
import LevelUp from "@lotties/level-up.json";
import FancyText from "@carefully-coded/react-text-gradient";
import { useResponsive } from "@hooks/use-responsive";
import { useMemo } from "react";

export function GamificationModalLevel3() {
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
        Você alcançou o nível 3!
      </Text>
      <Center>
        <Image
          borderRadius="lg"
          boxShadow="dark-lg"
          maxW="10rem"
          w="100%"
          height="auto"
          src="images/level-3-help.PNG"
          alt="foguete clicado mostrando o menu"
        />
      </Center>
      <Text fontWeight="medium" fontFamily="Heebo" color="white">
        Agora clicando no foguete posicionado no cabeçalho à direita, conseguirá
        ver um menu que libera novas áreas!
      </Text>
      <Text fontWeight="medium" fontFamily="Heebo" color="white">
        Por essa você não esperava, né?
      </Text>
    </Stack>
  );
}
