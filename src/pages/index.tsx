import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/default";
import { Introduction } from "@modules/root/Introduction";
import { AboutMe } from "@modules/root/AboutMe";
import { Career } from "@modules/root/Career/Index";
import { SEO } from "@components/SEO";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Felipe Austríaco - Página Inicial"
        image="/images/me3.jpeg"
        description="Meu portfólio com informações pessoais, projetos e artigos"
      />
      <Introduction />
      <AboutMe />
      <Career />
    </DefaultLayout>
  );
};

export default Home;
