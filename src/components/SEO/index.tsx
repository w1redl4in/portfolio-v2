import Head from "next/head";

interface SEOProps {
  title: string;
  image: string;
  description: string;
}
export function SEO({ title, image, description }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
