import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/default";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Typ from "react-typing-effect";
import { useAppSelector } from "@redux/hooks";
import { selectPortfolioBehavior } from "@redux/slices/portfolio-behavior";

const Home: NextPage = () => {
  const { showIntroduction } = useAppSelector(selectPortfolioBehavior);

  return (
    <DefaultLayout>
      <Flex
        p={1}
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        position="relative"
        minHeight="calc(100vh - 108px)"
        marginTop={20}
      >
        <Heading size="xl" color="white" fontFamily="Heebo">
          {showIntroduction && (
            <Typ
              cursor=" "
              typingDelay={50}
              eraseDelay={10000 * 10000}
              speed={25}
              text={["Olá, Eu sou o Felipe Austríaco 👋"]}
            />
          )}
        </Heading>
        <Heading size="xl" color="white" fontFamily="Heebo">
          {showIntroduction && (
            <Typ
              typingDelay={1000}
              eraseDelay={1000}
              speed={50}
              eraseSpeed={50}
              text={["Software Engineer 🧑🏽‍💻 ", "Gamer 🎮", "Self Taught 🤓"]}
            />
          )}
        </Heading>
        <Heading size="xl" color="white" fontFamily="Heebo">
          {showIntroduction && (
            <Typ
              cursor=" "
              typingDelay={2000}
              eraseDelay={10000 * 10000}
              speed={50}
              text={["Criando experiências únicas através do código"]}
            />
          )}
        </Heading>
        <Text fontFamily="Heebo" fontWeight="medium" color="white">
          {showIntroduction && (
            <Typ
              cursor=" "
              typingDelay={7000}
              eraseDelay={10000 * 10000}
              speed={50}
              text={["Atualmente desenvolvendo @ Mercado Livre"]}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={i > 24 ? { color: "#FFD858" } : {}}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          )}
        </Text>
      </Flex>

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
              marginBottom={["3rem", "3rem", "3rem", "0"]}
              maxW="350px"
              boxShadow="rgba(255, 216, 88, 0.8) 5px 5px, rgba(255, 216, 88, 0.4) 10px 10px, rgba(255, 216, 88, 0.3) 15px 15px, rgba(255, 216, 88, 0.2) 20px 20px, rgba(255, 216, 88, 0.04) 25px 25px"
              w="100%"
              height="auto"
              src="https://avatars.githubusercontent.com/u/43390533?v=4"
              alt="me"
              borderRadius="lg"
            />
            <Stack
              pl={["0", "0", "0", "7rem"]}
              textAlign={["center", "center", "center", "left"]}
            >
              <Flex
                justifyContent={["center", "center", "center", "flex-start"]}
              >
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
                Como você já sabe, meu nome é Felipe Austríaco, <br /> tenho 26
                anos e sou desenvolvedor há 3 anos. 😁
              </Text>

              <Text fontFamily="Heebo" fontSize="larger" color="textSecondary">
                Um homem com dois amores, front-end e back-end, <br /> apesar de
                ter uma queda maior pelo front. 🥰
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
                No tempo livre curto jogar de tudo, assistir
                séries/filmes/animes e <br /> fazer um churrasquinho com a
                família e amigos! 🥩🎞️🎮
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>

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
                    Hub Fintech / Fintech Magalu / Magalu
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
              <Text
                fontWeight="medium"
                fontFamily="Heebo"
                color="textSecondary"
              >
                Jan 2020 – May 2022
              </Text>
            </Stack>
            <Image
              height="auto"
              borderRadius="10px"
              maxW="400px"
              w="100%"
              src="hub-fintech.png"
              alt="hub fintech empresa"
            />
          </Flex>
          <Flex
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
              <Text
                fontWeight="medium"
                fontFamily="Heebo"
                color="textSecondary"
              >
                Jun 2022 – At moment
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </DefaultLayout>
  );
};

export default Home;
