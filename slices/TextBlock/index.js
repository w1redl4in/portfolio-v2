import React from "react";
import { RichText } from "prismic-reactjs";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Prism as Syntax } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const TextBlock = ({ slice }) => (
  <Stack as="section">
    <Heading size="lg" color="brand">
      <RichText render={slice.primary.title} />
    </Heading>
    <Text color="textSecondary">
      <RichText render={slice.primary.description} />
    </Text>
    {slice.primary.Code.length > 0 && (
      <Syntax
        customStyle={{
          padding: "2rem 1rem",
        }}
        language={slice.primary.codeLanguage[0]?.text}
        style={gruvboxDark}
      >
        {RichText.asText(slice.primary.Code)}
      </Syntax>
    )}
  </Stack>
);

export default TextBlock;
