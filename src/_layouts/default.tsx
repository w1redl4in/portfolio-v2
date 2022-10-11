import { Flex } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Level_2Reward } from "@gamification/rewards/level-2";
import { useExperienceInfo } from "@hooks/use-experience-info";
import { useCountExperience } from "hooks/use-count-experience";
import { DynamicLevel_4Reward } from "@gamification/rewards/level-4";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { isUserAtThisLevelOrGreater, isUserReadingAnArticle } =
    useExperienceInfo();
  useCountExperience();

  return (
    <Flex
      position="relative"
      background="background"
      justifyContent="space-between"
      flexDirection="column"
      minH="100vh"
      w="100%"
    >
      <Header />
      {isUserAtThisLevelOrGreater(2) && !isUserReadingAnArticle && (
        <Level_2Reward />
      )}
      {children}
      {isUserAtThisLevelOrGreater(4) && <DynamicLevel_4Reward />}
    </Flex>
  );
}
