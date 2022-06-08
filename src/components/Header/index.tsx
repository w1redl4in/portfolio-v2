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
      p={6}
      mb={2}
      justifyContent="space-between"
    >
      <Text minWidth="20%" fontSize="3xl">
        lain@wired
      </Text>

      <Flex
        alignContent="center"
        textAlign="center"
        minW="25rem"
        flexDirection="column"
        m="auto"
      >
        <Text color="yellow.500" fontWeight="extrabold" colorScheme="yellow">
          LEVEL {level}
        </Text>
        <Progress
          size="sm"
          my={1}
          borderRadius="20px"
          colorScheme="yellow"
          min={0}
          max={100}
          hasStripe
          isAnimated
          value={exp}
        />
        <Text color="yellow.500" fontWeight="extrabold" colorScheme="yellow">
          {isUserAtMaxLevel && "LEVEL MÁXIMO"}
        </Text>
      </Flex>

      <Navigation />
    </Flex>
  );
}
