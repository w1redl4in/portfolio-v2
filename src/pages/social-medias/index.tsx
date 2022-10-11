import { Box, Center, Heading, Icon, Stack } from "@chakra-ui/react";
import { SEO } from "@components/SEO";
import { DefaultLayout } from "@layouts/default";
import FancyText from "@carefully-coded/react-text-gradient";
import { useMemo } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "@icons";
import Link from "next/link";

const SocialMedias = () => {
  const socialMedias = useMemo(
    () => [
      {
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/felipe-austriaco-dev/",
      },
      {
        icon: AiFillGithub,
        link: "https://github.com/w1redl4in",
      },
      {
        icon: AiFillTwitterCircle,
        link: "https://twitter.com/lainwired_",
      },
    ],
    []
  );

  return (
    <DefaultLayout>
      <SEO
        title="Felipe Austríaco - Redes Sociais"
        description="Links para todas as redes sociais"
        image="/images/social-medias.jpg"
      />
      <Box marginTop="15rem">
        <Stack spacing="5rem" maxW="50rem" w="100%" margin="0 auto">
          <Heading
            textAlign="center"
            fontFamily="Bungee"
            color="yellow.400"
            size="lg"
          >
            <FancyText
              gradient={{ from: "#FFE259", to: "#FFA751", type: "linear" }}
              animate
              animateDuration={500}
            >
              Redes Sociais
            </FancyText>
          </Heading>

          <Center flexWrap="wrap">
            {socialMedias.map((socialMedia, key) => (
              <Box key={key} as={Link} href={socialMedia.link} target="_blank">
                <Icon
                  margin="5rem"
                  w={24}
                  h={24}
                  cursor="pointer"
                  as={socialMedia.icon}
                  color="brand"
                  _hover={{
                    transform: "scale(1.1)",
                    transitionDuration: "0.3s",
                    transitionTimingFunction: "ease-out",
                  }}
                />
              </Box>
            ))}
          </Center>
        </Stack>
      </Box>
    </DefaultLayout>
  );
};

export default SocialMedias;
