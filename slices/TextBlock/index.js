import React from "react";
import { RichText } from "prismic-reactjs";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Prism as Syntax } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const headingTranslations = {
  heading1: "xl",
  heading2: "lg",
  heading3: "md",
};

const TextBlock = ({ slice }) => (
  <Stack as="section">
    <Heading
      size={headingTranslations[slice.primary.title[0]?.type]}
      color="brand"
    >
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
        style={darcula}
      >
        {RichText.asText(slice.primary.Code)}
      </Syntax>
    )}
  </Stack>
);

export default TextBlock;
