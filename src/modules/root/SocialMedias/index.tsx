import { Box, Flex, Heading, keyframes, Link } from "@chakra-ui/react";
import FancyText from "@carefully-coded/react-text-gradient";

export function SocialMedias() {
  const scroll = keyframes`
   0% { transform: translateX(0); }
	 100% { transform: translateX(calc(-250px * 7))}
  `;

  const animation = `${scroll} 40s linear infinite`;

  const items = [
    {
      value: "LinkedIn",
      route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
    },
    {
      value: "Instagram",
      route: "https://www.instagram.com/felipe.austriaco/",
    },
    {
      value: "Twitter",
      route: "https://twitter.com/lainwired_",
    },
    {
      value: "Github",
      route: "https://github.com/w1redl4in",
    },
    {
      value: "LinkedIn",
      route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
    },
    {
      value: "Instagram",
      route: "https://www.instagram.com/felipe.austriaco/",
    },
    {
      value: "Twitter",
      route: "https://twitter.com/lainwired_",
    },
    {
      value: "Github",
      route: "https://github.com/w1redl4in",
    },
    {
      value: "LinkedIn",
      route: "https://www.linkedin.com/in/felipe-austriaco-dev/",
    },
    {
      value: "Instagram",
      route: "https://www.instagram.com/felipe.austriaco/",
    },
    {
      value: "Twitter",
      route: "https://twitter.com/lainwired_",
    },
    {
      value: "Github",
      route: "https://github.com/w1redl4in",
    },
  ];

  return (
    <Flex height="20vh" overflow="hidden" position="relative" w="auto">
      <Box animation={animation} display="flex" width="calc(250px * 14)">
        {items.map((item) => (
          <Box
            display="flex"
            alignItems="center"
            h="100px"
            w="250px"
            key={item.value}
          >
            <Heading
              as={Link}
              textAlign="center"
              fontFamily="Bungee"
              color="yellow.400"
              size="lg"
              href={item.route}
              target="_blank"
            >
              <FancyText
                gradient={{ from: "#FFE259", to: "#FFA751", type: "linear" }}
                animate
                animateDuration={500}
              >
                {item.value}
              </FancyText>
            </Heading>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
