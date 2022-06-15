import { Flex, Stack, Text, Image } from "@chakra-ui/react";

export function AboutMe() {
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
            marginBottom={["3rem", "3rem", "3rem", "0"]}
            maxW="350px"
            opacity={0.7}
            w="100%"
            height="auto"
            src="me.jpg"
            alt="me"
            borderRadius="lg"
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
              No tempo livre curto jogar de tudo, assistir séries/filmes/animes
              e <br /> fazer um churrasquinho com a família e amigos! 🥩🎞️🎮
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}