/* eslint-disable react/no-children-prop */
import React from "react";
import { RichText } from "prismic-reactjs";
import { Code as ChakraCode } from "@chakra-ui/react";

const Code = ({ slice }) => (
  <section>
    <ChakraCode
      width="100%"
      padding="2rem"
      colorScheme="whiteAlpha"
      background="modalBackground"
      children={<RichText render={slice.primary.Code} />}
    />
  </section>
);

export default Code;
