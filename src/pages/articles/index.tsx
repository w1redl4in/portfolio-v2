import { Box, Heading, Text, Stack, Image, HStack, Badge } from "@chakra-ui/react";
import { DefaultLayout } from "@layouts/default";
import { getPrismicClient } from "services/prismic";
import { RichText } from "prismic-dom";
import Link from "next/link";
import { SEO } from "@components/SEO";
import FancyText from "@carefully-coded/react-text-gradient";
import { getUnsplashImage } from "services/unsplash";
import { badgeColors } from "utils/badge-colors";

interface ArticlesProps {
  articles: [
    {
      slug: string;
      title: string;
      date: string;
      thumbnail: string;
      altThumbnail: string;
      readTime: string;
      description: string;
      keywords: string;
    }
  ];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <DefaultLayout>
      <SEO
        title="Felipe Austríaco - Artigos"
        image={articles[0]?.thumbnail}
        description="Listagem de todos os artigos"
      />
      <Box marginTop="15rem">
        <Stack maxW="50rem" w="100%" margin="0 auto">
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
              Artigos
            </FancyText>
          </Heading>
          <Stack>
            {articles.map((article) => (
              <Box
                as={Link}
                href={`articles/${article.slug}`}
                key={article.slug}
              >
                <Box
                  _hover={{
                    h2: {
                      color: "brand",
                    },
                    img: {
                      transform: "scale(1.008)",
                    },
                  }}
                  cursor="pointer"
                  margin="2rem 0"
                >
                  <HStack
                    alignItems="flex-start"
                    marginBottom="2rem"
                    spacing="2rem"
                    flexDir={["column", "column", "row", "row"]}
                  >
                    <Image
                      borderRadius="base"
                      transition="transform 200ms linear"
                      maxW={["100%", "100%", "25rem", "25rem"]}
                      w="100%"
                      marginBottom={["1rem", "1rem", 0, 0]}
                      src={article.thumbnail}
                      alt={article.altThumbnail}
                      loading="lazy"
                    />
                    <Stack>
                      <Heading
                        transition="color 500ms linear"
                        size="md"
                        color="white"
                      >
                        {article.title}
                      </Heading>
                      <HStack>
                        <Text color="textSecondary" fontWeight="light">
                          {new Date(article.date).toLocaleDateString("pt-BR", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </Text>

                        <Text color="textSecondary">
                          •&nbsp;{article.readTime}
                        </Text>
                      </HStack>
                      <HStack>
                        {article.keywords.split(' ').map(keyword => (
                          <Badge width="fit-content" key={keyword} colorScheme={badgeColors[Math.floor(Math.random() * badgeColors.length)]}>{keyword}</Badge>
                        ))}
                      </HStack>
                      <Text className="description" color="textSecondary">
                        {article.description}
                      </Text>
                    </Stack>
                  </HStack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const prismic = getPrismicClient();

  const prismicResponse = await prismic.getAllByType("articles", {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    }
  });

  const articles = await Promise.all(prismicResponse.map(async (article) => {

    const keywords = article.data.thumbnail.alt

    const { thumbnail, altThumbnail } = await getUnsplashImage(keywords)

    return {
      slug: article.uid,
      title: RichText.asText(article.data.title),
      thumbnail,
      altThumbnail,
      description: RichText.asText(article.data.Description),
      readTime: RichText.asText(article.data.ReadTimeEstimate),
      date: article.data.date,
      keywords
    }
  }));

  return {
    props: {
      articles,
    },
    revalidate: 60 * 20, // tempo em segundos, 20 minutos
  };
}

export default Articles;
