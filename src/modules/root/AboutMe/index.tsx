import { Flex, Stack, Text, Image } from "@chakra-ui/react";
import { useResponsive } from "@hooks/use-responsive";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

export function AboutMe() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { isTablet, isMobile } = useResponsive();

  const imageVariants = {
    hidden: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
      },
    },
    whileHover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    whileTap: {
      scale: 1.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  const maxWidthImage = useMemo(() => {
    if (isTablet) return "250px";
    if (isMobile) return "200px";
    return "280px";
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 108px)"
      marginBottom={["5rem", "5rem", "5rem", "0"]}
    >
      <Stack
        paddingX={10}
        spacing={["10rem", "10rem", "10rem", "3rem"]}
        maxW="70rem"
        w="100%"
      >
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            ref={ref}
            as={motion.img}
            variants={imageVariants}
            initial="hidden"
            animate={control}
            whileHover="whileHover"
            whileTap="whileTap"
            marginBottom={["3rem", "3rem", "3rem", "0"]}
            maxW={maxWidthImage}
            w="100%"
            height="auto"
            src="images/me4.jpeg"
            borderRadius="0.5rem"
            alt="me"
          />
          <Stack
            pl={["0", "0", "0", "7rem"]}
            textAlign={["center", "center", "center", "left"]}
          >
            <Flex justifyContent={["center", "center", "center", "flex-start"]}>
              <Text
                fontSize="3xl"
                fontWeight="medium"
                bgGradient="linear(to-r, #00F5A0, #00D9F5)"
                bgClip="text"
                fontFamily="Heebo"
                textAlign={["center", "center", "center", "center"]}
              >
                Sobre mim
              </Text>
            </Flex>
            <Text fontFamily="Heebo" fontSize="larger" color="textSecondary">
              Meu nome é Felipe Austríaco, <br /> tenho 26 anos e sou
              desenvolvedor há 3 anos. 😁
            </Text>

            <Text fontFamily="Heebo" fontSize="larger" color="textSecondary">
              Curto tanto front-end quanto back-end, <br /> apesar de ter uma
              queda maior pelo front. 🥰
            </Text>

            <Text fontFamily="Heebo" fontSize="larger" color="textSecondary">
              Minhas tecnologias favoritas são: React, Node e TypeScript! 🧑🏽‍💻
            </Text>

            <Text fontFamily="Heebo" fontSize="larger" color="textSecondary">
              Atualmente o meu foco de estudos está mais nos conceitos como
              Arquiteturas, <br />
              Design Patterns e SOLID. 🧠
            </Text>

            <Text fontFamily="Heebo" fontSize="larger" color="textSecondary">
              No tempo livre curto jogar de tudo, assistir séries/filmes/animes
              e <br /> fazer um churrasquinho com a família e amigos! 🥩🎞️🎮
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
