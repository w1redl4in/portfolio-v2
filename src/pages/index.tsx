import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/default";
import { Flex, Heading, Text } from "@chakra-ui/react";
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
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        position="relative"
        minHeight="100vh"
      >
        {isUserAtThisLevel(2) &&
          array.map((a, key) => <span key={key} style={a}></span>)}

        <Heading>👋 Olá, Eu sou o Felipe Austríaco</Heading>
        <br />
        <Heading lineHeight={1.2} size="3xl">
          Software Engineer <br /> lorem ipsum dolor <br /> lorem ipsum dolor
          lorem ipsum dolor
        </Heading>
        <br />
        <Text fontWeight="medium">
          lorem ipsum dolor lorem ipsum dolor @{" "}
          <strong style={{ color: "#ffd900" }}>Mercado Livre</strong>
        </Text>
      </Flex>
    </DefaultLayout>
  );
};

export default Home;
