import { Flex, Text, Progress } from "@chakra-ui/react";
// import { Navigation } from "@components/Navigation";
import { useExperienceInfo } from "@hooks/use-experience-info";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { Lottie } from "@components/Lottie";
import Logo from "@lotties/logo.json";
import Logo2 from "@lotties/logo2.json";
import { useResponsive } from "@hooks/use-responsive";
import { useEffect, useMemo } from "react";
import { useAppSelector } from "@redux/hooks";
import { motion, useAnimation } from "framer-motion";
import { selectPortfolioBehavior } from "@redux/slices/portfolio-behavior";
import { Level_3Reward } from "@gamification/rewards/level-3";

export function Header() {
  const control = useAnimation();
  const { isUserAtMaxLevel, exp, level, isUserAtThisLevelOrGreater } =
    useExperienceInfo();
  const { showHeaderAnimation } = useAppSelector(selectPortfolioBehavior);

  const { isMobile } = useResponsive();

  const lottieWidthAndHeight = useMemo(() => {
    if (isMobile) return 90;
    return 130;
  }, [isMobile]);

  const headerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const progressBarVariant = {
    hidden: {
      opacity: 0,
      y: "-50vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const rightLottieVariant = {
    hidden: {
      x: "100vw",
      rotate: 360,
    },
    visible: {
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const leftLottieVariant = {
    hidden: {
      x: "-100vw",
      rotate: 360,
    },
    visible: {
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (showHeaderAnimation) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, showHeaderAnimation]);

  return (
    <Flex
      as={motion.div}
      initial="hidden"
      animate={control}
      variants={headerVariants}
      zIndex={999}
      w="100%"
      position="fixed"
      top={0}
      alignItems="center"
      p={6}
      justifyContent="space-around"
      backdropFilter="blur(8px)"
    >
      {/* {!isHD && (
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
      )} */}
      <Flex mx="2rem" as={motion.div} variants={leftLottieVariant}>
        <Lottie
          animationData={Logo}
          width={lottieWidthAndHeight}
          height={lottieWidthAndHeight}
        />
      </Flex>

      <Flex
        as={motion.div}
        variants={progressBarVariant}
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
        {/* <Progress
          size="xs"
          my={1}
          borderRadius="20px"
          colorScheme="yellow"
          min={0}
          max={100}
          hasStripe
          isAnimated
          value={isUserAtMaxLevel ? 100 : exp}
        /> */}
        <ProgressBar
          height={5}
          filledBackground="linear-gradient(to right,#FFE259, #FFA751)"
          percent={isUserAtMaxLevel ? 100 : exp}
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

      {isUserAtThisLevelOrGreater(3) ? (
        <Level_3Reward />
      ) : (
        <Flex as={motion.div} variants={rightLottieVariant} mx="2rem">
          <Lottie
            animationData={Logo2}
            width={lottieWidthAndHeight}
            height={lottieWidthAndHeight}
          />
        </Flex>
      )}

      {/* <Navigation /> */}
      {/* {!isTablet && <Notifications />} */}
    </Flex>
  );
}
