import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/default";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { useExperienceInfo } from "hooks/use-experience-info";

const Home: NextPage = () => {
  const { isUserAtThisLevel } = useExperienceInfo();

  const array: CSSProperties[] = [
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "red",
      top: "10%",
      bottom: 1,
      right: 1,
      left: "20%",
    },
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "red",
      top: "15%",
      bottom: 1,
      right: 1,
      left: "80%",
    },
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "red",
      top: "20%",
      bottom: 1,
      right: 1,
      left: "50%",
    },
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "red",
      top: "45%",
      bottom: 1,
      right: 1,
      left: "30%",
    },
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "blue",
      top: "30%",
      bottom: 1,
      right: 1,
      left: "95%",
    },
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "red",
      top: "80%",
      bottom: 1,
      right: 1,
      left: "5%",
    },
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "red",
      top: "70%",
      bottom: 1,
      right: 1,
      left: "70%",
    },
    {
      zIndex: -1,
      position: "absolute",
      width: 20,
      height: 20,
      background: "red",
      top: "80%",
      bottom: 1,
      right: 1,
      left: "90%",
    },
  ];

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
        {isUserAtThisLevel(2) &&
          array.map((a, key) => <span key={key} style={a}></span>)}

        <Heading fontFamily="Heebo">👋 Olá, Eu sou o Felipe Austríaco</Heading>
        <br />
        <Heading fontFamily="Heebo" lineHeight={1.2} size="3xl">
          Software Engineer <br /> lorem ipsum dolor <br /> lorem ipsum dolor
          lorem ipsum dolor
        </Heading>
        <br />
        <Text fontFamily="Heebo" fontWeight="medium">
          lorem ipsum dolor lorem ipsum dolor @{" "}
          <strong style={{ color: "#ffd900" }}>Mercado Livre</strong>
        </Text>
      </Flex>

      <Flex
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
          <Text fontFamily="Heebo" p={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Gravida morbi pulvinar sit morbi viverra nisl sagittis, placerat.{" "}
            <br />
            Non blandit cras fames suspendisse iaculis vitae. Id semper in
            tempus sed posuere leo. <br /> Dui sed viverra sit in tellus
            interdum aliquet nunc congue.
          </Text>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
};

export default Home;
