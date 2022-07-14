import React from "react";
import { RichText } from "prismic-reactjs";
import { Stack, Heading, Text } from "@chakra-ui/react";

const TextBlock = ({ slice }) => (
  <Stack as="section">
    <Heading color="brand">
      <RichText render={slice.primary.title} />
    </Heading>
    <Text color="textSecondary">
      <RichText render={slice.primary.description} />
    </Text>
  </Stack>
);

export default TextBlock;
