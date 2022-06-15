import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/default";
import { Introduction } from "@modules/root/Introduction";
import { AboutMe } from "@modules/root/AboutMe";
import { Career } from "@modules/root/Career/Index";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Introduction />
      <AboutMe />
      <Career />
    </DefaultLayout>
  );
};

export default Home;
