import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/default";
import { Introduction } from "@modules/root/Introduction";
import { AboutMe } from "@modules/root/AboutMe";
import { Career } from "@modules/root/Career/Index";
import { SocialMedias } from "@modules/root/SocialMedias";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Felipe Austríaco - Página Inicial</title>
        <meta name="author" content="Felipe Austríaco" />
        <meta
          name="description"
          content="My portfolio with personal info, projects and articles"
        />
        <meta
          name="keywords"
          content="Felipe Austríaco, Austríaco, React, ReactJS, React.JS, Javascript, JS, js, Node, Node.js, Node.JS, HTML, HTML5, CSS, CSS3, Next, Nextjs, Next.js, CMS, Prismic CMS, Typescript, TypeScript, ts, portfolio, Portfolio, Hooks, React-hooks"
        />
      </Head>
      <Introduction />
      <AboutMe />
      <Career />
      <SocialMedias />
    </DefaultLayout>
  );
};

export default Home;
