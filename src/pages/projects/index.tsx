import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { DefaultLayout } from "@layouts/default";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { getPrismicClient } from "services/prismic";
import { RichText } from "prismic-dom";
import { AiFillGithub, FaRocket } from "@icons";
import { useCallback } from "react";
import { SEO } from "@components/SEO";
import FancyText from "@carefully-coded/react-text-gradient";

interface ProjectsProps {
  projects: [
    {
      slug: string;
      title: string;
      description: string;
      image: string;
      date: string;
      wip: boolean;
      techs: string[];
      links: {
        [key: string]: {
          link_type: string;
          url: string;
        };
      };
    }
  ];
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      x: "-50vw",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const returnIconAccordingToType = useCallback((type: string) => {
    switch (type) {
      case "github":
        return AiFillGithub;
      case "demo":
        return FaRocket;
    }
  }, []);

  const returnBadgeAccordingToWip = useCallback((wip: boolean) => {
    if (wip)
      return (
        <Badge colorScheme="green" p={1}>
          Currently Working On
        </Badge>
      );

    return (
      <Badge colorScheme="blue" px={2} py={0.5}>
        Done or Delivered
      </Badge>
    );
  }, []);

  return (
    <DefaultLayout>
      <SEO
        title="Felipe Austríaco - Projetos"
        image={projects[0]?.image}
        description="Listagem de todos os projetos que fiz"
      />
      <Box
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        marginTop="15rem"
      >
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
            Projetos
          </FancyText>
        </Heading>
        c
        <br />
        <Flex
          maxW="105rem"
          w="100%"
          m="0 auto"
          flexWrap="wrap"
          justify="center"
        >
          {projects.map((project) => (
            <Box
              m={5}
              key={project.slug}
              maxW={["lg", "sm", "sm", "sm"]}
              borderWidth="1px"
              borderRadius="lg"
              borderColor="whiteAlpha.300"
              overflow="hidden"
              as={motion.div}
              variants={projectVariants}
            >
              <Image src={project.image} alt="project" />
              <Box p="6" display="flex" alignItems="space-between">
                <Stack w="100%">
                  <Heading color="white">{project.title}</Heading>
                  <Text color="textSecondary" fontWeight="normal">
                    {project.description}
                  </Text>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    {returnBadgeAccordingToWip(project.wip)}
                    <HStack>
                      {Object.values(project.links).map(
                        (link, key) =>
                          link.url && (
                            <Tooltip
                              key={key}
                              label={Object.keys(project.links)[key]}
                            >
                              <a
                                key={key}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Icon
                                  cursor="pointer"
                                  w={23.5}
                                  h={23.5}
                                  color="white"
                                  as={returnIconAccordingToType(
                                    Object.keys(project.links)[key]
                                  )}
                                />
                              </a>
                            </Tooltip>
                          )
                      )}
                    </HStack>
                  </Flex>
                  <HStack flexWrap="wrap">
                    {project.techs.map((tech) => (
                      <Tooltip key={tech} label={tech}>
                        <Image w={25} src={`/images/${tech}.svg`} alt={tech} />
                      </Tooltip>
                    ))}
                  </HStack>
                </Stack>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const prismic = getPrismicClient();

  const prismicResponse = await prismic.getAllByType("projects");

  const projects = prismicResponse.map((project) => ({
    slug: project.id,
    title: RichText.asText(project.data.title),
    description: RichText.asText(project.data.description),
    image: project.data.projectImage.url,
    wip: project.data.wip,
    links: project.data.links[0],
    techs: RichText.asText(project.data.techs).split(","),
  }));

  return {
    props: {
      projects,
    },
    revalidate: 60 * 20, // tempo em segundos, 20 minutos
  };
}

export default Projects;
