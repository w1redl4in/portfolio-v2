import { Box, Flex, Heading, Icon, keyframes, Link } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
  AiOutlineWhatsApp,
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
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
      },
      {
        route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
        icon: AiFillLinkedin,
      },
      {
        route: "https://twitter.com/lainwired_",
        icon: AiFillTwitterSquare,
      },
      {
        route: "https://github.com/w1redl4in",
        icon: AiFillGithub,
      },
      {
        route: "https://wa.me/5511975812099",
        icon: AiOutlineWhatsApp,
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
        {items.map((item, index) => (
          <Box
            display="flex"
            alignItems="center"
            minW="5rem"
            margin="0 5rem"
            key={index}
          >
            <Heading
              as={Link}
              textAlign="center"
              fontFamily="Bungee"
              color="yellow.300"
              fontSize="lg"
              href={item.route}
              target="_blank"
              _hover={{
                color: "brand",
              }}
            >
              <Icon
                cursor="pointer"
                w={41}
                h={41}
                as={item.icon}
                _hover={{
                  transform: "scale(1.1)",
                  transitionDuration: "0.3s",
                  transitionTimingFunction: "ease-out",
                }}
              />
            </Heading>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
