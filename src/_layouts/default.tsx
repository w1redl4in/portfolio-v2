import { Flex } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Level_2Reward } from "@gamification/rewards/level-2";
import { useExperienceInfo } from "@hooks/use-experience-info";
import { SocialMedias } from "@modules/root/SocialMedias";
import { useCountExperience } from "hooks/use-count-experience";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  useCountExperience();
  const { isUserAtThisLevelOrGreater, isUserReadingAnArticle } =
    useExperienceInfo();

  return (
    <Flex
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
      <SocialMedias />
    </Flex>
  );
}
