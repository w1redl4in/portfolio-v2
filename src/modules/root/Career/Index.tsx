import { Flex, Stack, Image, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Career() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const containerAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const hubFintechAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
      },
    },
  };

  const meliAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
      },
    },
  };

  const imageAnimations = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1.03,
    },
  };

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
        spacing={["10rem", "10rem", "10rem", "1rem"]}
        maxW="70rem"
        w="100%"
        as={motion.div}
        ref={ref}
        variants={containerAnimation}
        initial="hidden"
        animate={control}
      >
        <Text
          fontSize="4xl"
          fontWeight="medium"
          bgGradient="linear(to-r,#FF8008, #FFC837)"
          bgClip="text"
          fontFamily="Heebo"
          textAlign={["center", "center", "center", "inherit"]}
        >
          Carreira
        </Text>
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          as={motion.div}
          variants={hubFintechAnimation}
        >
          <Stack textAlign={["center", "center", "center", "left"]}>
            <Text fontFamily="Heebo" color="white" fontWeight="semibold">
              Analisa de Desenvolvimento de Software
            </Text>
            <Flex>
              <Link target="_blank" href="https://fintechmagalu.com.br">
                <Text
                  cursor="pointer"
                  textDecor="underline"
                  fontWeight="medium"
                  fontFamily="Heebo"
                  color="#0086FF"
                >
                  Hub Fintech - Fintech Magalu
                </Text>
              </Link>
              <Text
                fontWeight="medium"
                fontFamily="Heebo"
                color="textSecondary"
              >
                &nbsp;• Barueri, São Paulo
              </Text>
            </Flex>
            <Text fontWeight="medium" fontFamily="Heebo" color="textSecondary">
              Jan 2020 – May 2022
            </Text>
          </Stack>
          <Image
            as={motion.img}
            variants={imageAnimations}
            whileHover="whileHover"
            initial="hidden"
            animate={control}
            height="auto"
            borderRadius="10px"
            maxW="400px"
            w="100%"
            src="hub-fintech.png"
            alt="hub fintech empresa"
          />
        </Flex>
        <Flex
          as={motion.div}
          variants={meliAnimation}
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            height="auto"
            borderRadius="10px"
            maxW="400px"
            w="100%"
            src="meli.png"
            as={motion.img}
            variants={imageAnimations}
            initial="hidden"
            animate={control}
            alt="hub fintech empresa"
          />
          <Stack textAlign={["center", "center", "center", "right"]}>
            <Text fontFamily="Heebo" color="white" fontWeight="semibold">
              Software Engineer
            </Text>
            <Flex>
              <Link target="_blank" href="https://www.mercadolivre.com.br">
                <Text
                  cursor="pointer"
                  textDecor="underline"
                  fontWeight="medium"
                  fontFamily="Heebo"
                  color="brand"
                >
                  Mercado Livre
                </Text>
              </Link>
              <Text
                fontWeight="medium"
                fontFamily="Heebo"
                color="textSecondary"
              >
                &nbsp;• Osasco, São Paulo
              </Text>
            </Flex>
            <Text fontWeight="medium" fontFamily="Heebo" color="textSecondary">
              Jun 2022 – At moment
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
