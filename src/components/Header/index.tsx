import { Flex, Text, Progress, Box } from "@chakra-ui/react";
import { Navigation } from "@components/Navigation";
import { useExperienceInfo } from "@hooks/use-experience-info";

export function Header() {
  const { isUserAtMaxLevel, exp, level } = useExperienceInfo();

  return (
    <Flex
      zIndex={999}
      w="100%"
      position="fixed"
      top={0}
      alignItems="center"
      py={5}
      mb={2}
      justifyContent="space-between"
    >
      <Flex justifyContent="space-around" alignItems="center">
        <Box borderRadius="50%" width="50px" height="50px">
          {/* <Image
            style={{ borderRadius: "50%" }}
            width="50px"
            height="50px"
            src="https://github.com/w1redl4in.png"
            alt="minha imagem"
          /> */}
        </Box>
        <Text casing="uppercase" fontSize="3xl">
          Felipe Austríaco
        </Text>
      </Flex>

      <Flex
        alignContent="center"
        textAlign="center"
        minW="25rem"
        flexDirection="column"
        m="auto"
      >
        <Text
          letterSpacing={2}
          color="yellow.500"
          fontWeight="extrabold"
          colorScheme="yellow"
        >
          NIVEL {level}
        </Text>
        <Progress
          my={1}
          borderRadius="20px"
          colorScheme="yellow"
          min={0}
          max={100}
          hasStripe
          isAnimated
          value={exp}
        />
        <Text
          letterSpacing={2}
          color="yellow.500"
          fontWeight="extrabold"
          colorScheme="yellow"
        >
          {isUserAtMaxLevel && "LEVEL MÁXIMO"}
          {!isUserAtMaxLevel && `EXP ${exp}`}
        </Text>
      </Flex>

      <Navigation />
    </Flex>
  );
}
