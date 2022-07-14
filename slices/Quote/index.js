import React from "react";
import { RichText } from "prismic-reactjs";
import { Text } from "@chakra-ui/react";

const Quote = ({ slice }) => (
  <Text color="gray.600" as="em">
    <RichText render={slice.primary.quote} />
  </Text>
);

export default Quote;
