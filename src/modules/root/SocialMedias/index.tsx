import { Box, Flex, Heading, Icon, keyframes, Link } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGithub,
} from "@icons";
import { useMemo } from "react";

export function SocialMedias() {
  const scroll = keyframes`
   0% { transform: translateX(0); }
	 100% { transform: translateX(calc(-250px * 7))}
  `;

  const animation = `${scroll} 120s linear infinite`;

  const items = useMemo(
    () => [
      {
        value: "LinkedIn",
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        value: "Instagram",
        route: "https://www.instagram.com/felipe.austriaco/",
        icon: AiFillInstagram,
      },
      {
        value: "Twitter",
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        value: "Github",
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        value: "LinkedIn",
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        value: "Instagram",
        route: "https://www.instagram.com/felipe.austriaco/",
        icon: AiFillInstagram,
      },
      {
        value: "Twitter",
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        value: "Github",
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        value: "LinkedIn",
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        value: "Instagram",
        route: "https://www.instagram.com/felipe.austriaco/",
        icon: AiFillInstagram,
      },
      {
        value: "Twitter",
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        value: "Github",
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        value: "LinkedIn",
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        value: "Instagram",
        route: "https://www.instagram.com/felipe.austriaco/",
        icon: AiFillInstagram,
      },
      {
        value: "Twitter",
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        value: "Github",
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        value: "LinkedIn",
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        value: "Instagram",
        route: "https://www.instagram.com/felipe.austriaco/",
        icon: AiFillInstagram,
      },
      {
        value: "Twitter",
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        value: "Github",
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        value: "LinkedIn",
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        value: "Instagram",
        route: "https://www.instagram.com/felipe.austriaco/",
        icon: AiFillInstagram,
      },
      {
        value: "Twitter",
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        value: "Github",
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        value: "LinkedIn",
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        value: "Instagram",
        route: "https://www.instagram.com/felipe.austriaco/",
        icon: AiFillInstagram,
      },
      {
        value: "Twitter",
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        value: "Github",
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
    ],
    []
  );

  return (
    <Flex
      bg="modalBackground"
      m="2rem 0"
      height="10vh"
      overflow="hidden"
      w="auto"
    >
      <Box
        alignItems="center"
        animation={animation}
        display="flex"
        width="calc(250px * 14)"
      >
        {items.map((item) => (
          <Box
            display="flex"
            alignItems="center"
            minW="5rem"
            margin="0 5rem"
            key={item.value}
          >
            <Heading
              as={Link}
              textAlign="center"
              fontFamily="Bungee"
              color="yellow.400"
              fontSize="lg"
              href={item.route}
              target="_blank"
            >
              <Icon cursor="pointer" w={41} h={41} as={item.icon} />
            </Heading>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
