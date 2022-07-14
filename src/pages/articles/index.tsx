import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { DefaultLayout } from "@layouts/default";
import { getPrismicClient } from "services/prismic";
import { RichText } from "prismic-dom";
import Link from "next/link";

interface ArticlesProps {
  articles: [
    {
      slug: string;
      title: string;
      date: string;
      thumbnail: string;
      altThumbnail: string;
    }
  ];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <DefaultLayout>
      <Box marginTop="15rem">
        <Stack maxW="50rem" w="100%" margin="0 auto">
          <Heading textAlign="center" color="white">
            Artigos
          </Heading>
          <Stack>
            {articles.map((article) => (
              <Box
                as={Link}
                href={`articles/${article.slug}`}
                margin="2rem 0"
                key={article.slug}
              >
                <Box cursor="pointer">
                  <HStack margin="0.5rem 0" spacing="2rem">
                    <Image
                      maxW="20rem"
                      w="100%"
                      src={article.thumbnail}
                      alt={article.altThumbnail}
                    />
                    <Stack>
                      <Heading color="brand">{article.title}</Heading>
                      <Text color="textSecondary">{article.slug}</Text>
                    </Stack>
                  </HStack>
                  <Divider color="brand" borderColor="brand" />
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

  const prismicResponse = await prismic.getAllByType("articles");

  const articles = prismicResponse.map((article) => ({
    slug: article.uid,
    title: RichText.asText(article.data.title),
    thumbnail: article.data.thumbnail.url,
    altThumbnail: article.data.thumbnail.alt,
    date: article.data.date,
  }));

  return {
    props: {
      articles,
    },
  };
}

export default Articles;
