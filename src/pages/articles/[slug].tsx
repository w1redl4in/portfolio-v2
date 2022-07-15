import {
  Box,
  Heading,
  Stack,
  Image,
  Flex,
  Link,
  Text,
  Icon,
} from "@chakra-ui/react";
import { DynamicSliceMachine } from "@components/SliceMachine";
import { DefaultLayout } from "@layouts/default";
import { RichText } from "prismic-reactjs";
import { getPrismicClient } from "services/prismic";
import { SEO } from "@components/SEO";
import NextLink from "next/link";
import { AiOutlineRollback } from "@icons";

type ArticleProps = {
  article: {
    title: string;
    thumbnail: string;
    altThumbnail: string;
    date: string;
    slices: any[];
    description: string;
  };
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <DefaultLayout>
      <SEO
        title={article.title}
        image={article.thumbnail}
        description={article.description}
      />
      <Box w="100%" marginTop="12rem">
        <Flex justify="center">
          <Image
            placeSelf="center"
            src={article.thumbnail}
            alt={article.altThumbnail}
          />
        </Flex>

        <Box p="2rem" maxW="50rem" w="100%" margin="0 auto">
          <Box mb="2rem">
            <NextLink href="/articles" passHref>
              <Link display="flex" color="white" alignItems="center">
                <Icon as={AiOutlineRollback} mx="2px" w={9} h={9} />
                <Text
                  transition="all 200ms"
                  fontSize="2xl"
                  fontFamily="Heebo"
                  fontWeight="bold"
                >
                  Voltar
                </Text>
              </Link>
            </NextLink>
          </Box>

          <Heading color="brand">{article.title}</Heading>
          <Stack spacing="3rem">
            <DynamicSliceMachine slices={article.slices} />
          </Stack>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export async function getStaticProps(context: any) {
  const prismic = getPrismicClient();

  const { slug } = context.params as { slug: string };

  const prismicResponse = await prismic.getByUID("articles", slug);

  const article = {
    title: RichText.asText(prismicResponse.data.title),
    thumbnail: prismicResponse.data.thumbnail.url,
    altThumbnail: prismicResponse.data.thumbnail.alt,
    date: prismicResponse.data.date,
    description: RichText.asText(prismicResponse.data.Description),
    slices: prismicResponse.data.slices,
  };

  return {
    props: {
      article,
    },
    revalidate: 60 * 20, // tempo em segundos, 20 minutos
  };
}

export async function getStaticPaths() {
  const prismic = getPrismicClient();

  const prismicResponse = await prismic.getAllByType("articles");

  const paths = prismicResponse.map((article) => ({
    params: { slug: article.uid },
  }));

  return { paths, fallback: false };
}

export default Article;
