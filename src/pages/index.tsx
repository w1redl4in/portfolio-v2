import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/default";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Flex
        p={1}
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        position="relative"
        minHeight="100vh"
        marginTop={20}
      >
        <Heading color="white" fontFamily="Heebo">
          👋 Olá, Eu sou o Felipe Austríaco
        </Heading>
        <br />
        <Heading color="white" fontFamily="Heebo" lineHeight={1.2} size="3xl">
          Software Engineer <br /> lorem ipsum dolor <br /> lorem ipsum dolor
          lorem ipsum dolor
        </Heading>
        <br />
        <Text color="white" fontFamily="Heebo" fontWeight="medium">
          lorem ipsum dolor lorem ipsum dolor @{" "}
          <strong style={{ color: "#ffd900" }}>Mercado Livre</strong>
        </Text>
      </Flex>

      {/* <Flex
        m="auto"
        alignItems="center"
        justifyContent="center"
        minHeight="calc(100vh - 108px)"
        flexDirection="column"
        maxW="50rem"
        w="100%"
      >
        <Text
          mx="auto"
          fontSize="4xl"
          fontWeight="bold"
          bgGradient="linear(to-r, #00F5A0, #00D9F5)"
          bgClip="text"
          fontFamily="Heebo"
        >
          Sobre mim
        </Text>
        <Flex
          justifyContent="center"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          py={5}
          m="auto"
        >
          <Image
            borderRadius="50%"
            opacity={0.5}
            alignSelf="center"
            src="https://avatars.githubusercontent.com/u/43390533?v=4"
            alt="me"
          />
          <Text color="white" fontFamily="Heebo" p={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Gravida morbi pulvinar sit morbi viverra nisl sagittis, placerat.{" "}
            <br />
            Non blandit cras fames suspendisse iaculis vitae. Id semper in
            tempus sed posuere leo. <br /> Dui sed viverra sit in tellus
            interdum aliquet nunc congue.
          </Text>
        </Flex>
      </Flex> */}

      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="calc(100vh - 108px)"
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
            bgGradient="linear(to-r, #FF8008, #FFC837)"
            bgClip="text"
            fontFamily="Heebo"
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
                <Link href="test" color="white">
                  <Text
                    cursor="pointer"
                    textDecor="underline"
                    fontWeight="medium"
                    fontFamily="Heebo"
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
                <Link href="test">
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
