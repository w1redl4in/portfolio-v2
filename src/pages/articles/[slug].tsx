import { Box, Heading, Stack, Image, Flex } from "@chakra-ui/react";
import { DynamicSliceMachine } from "@components/SliceMachine";
import { DefaultLayout } from "@layouts/default";
import { RichText } from "prismic-reactjs";
import { getPrismicClient } from "services/prismic";
import Head from "next/head";

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
      <Head>
        <title>{article.title}</title>
        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.thumbnail} />
        <meta property="og:description" content={article.description} />
        <meta
          property="og:url"
          content="Programação frontend, carreira, dicas"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
      </Head>
      <Box w="100%" marginTop="12rem">
        <Flex justify="center">
          <Image
            placeSelf="center"
            src={article.thumbnail}
            alt={article.altThumbnail}
          />
        </Flex>
        <Box p="2rem" maxW="50rem" w="100%" margin="0 auto">
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
