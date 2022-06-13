import { Flex, Text, Progress, Box, Button } from "@chakra-ui/react";
// import { Navigation } from "@components/Navigation";
import { Notifications } from "@components/Notifications";
import { useExperienceInfo } from "@hooks/use-experience-info";
import { useResponsive } from "@hooks/use-responsive";

export function Header() {
  const { isUserAtMaxLevel, exp, level } = useExperienceInfo();

  const { isHD, isTablet } = useResponsive();

  return (
    <Flex
      zIndex={999}
      w="100%"
      position="fixed"
      top={0}
      alignItems="center"
      p={6}
      justifyContent="space-between"
      backdropFilter="blur(8px)"
    >
      {!isHD && (
        <Text
          cursor="pointer"
          fontFamily="Indie Flower"
          minWidth="20%"
          fontSize="4xl"
          fontWeight="black"
          bgGradient="linear(to-r, #F953C6, #B91D73)"
          bgClip="text"
        >
          felipe@austríaco
        </Text>
      )}

      <Flex
        alignContent="center"
        textAlign="center"
        maxW="40rem"
        w="100%"
        flexDirection="column"
        m="auto"
      >
        <Text
          fontFamily="Bungee"
          fontWeight="extrabold"
          colorScheme="yellow"
          bgGradient="linear(to-r, #FFE259, #FFA751)"
          bgClip="text"
        >
          LEVEL {level}
        </Text>
        <Progress
          size="xs"
          my={1}
          borderRadius="20px"
          colorScheme="yellow"
          min={0}
          max={100}
          hasStripe
          isAnimated
          value={isUserAtMaxLevel ? 100 : exp}
        />
        <Text
          fontFamily="Bungee"
          fontWeight="extrabold"
          colorScheme="yellow"
          bgGradient="linear(to-r, #FFE259, #FFA751)"
          bgClip="text"
        >
          {isUserAtMaxLevel && "LEVEL MÁXIMO"}
        </Text>
      </Flex>
      {/* <Navigation /> */}
      {!isTablet && <Notifications />}
    </Flex>
  );
}
