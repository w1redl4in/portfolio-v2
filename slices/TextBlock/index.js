import React from "react";
import { RichText } from "prismic-reactjs";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Prism as Syntax } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const headingTranslations = {
  heading1: "xl",
  heading2: "lg",
  heading3: "md",
  heading4: "sm",
  heading5: "xs",
};

function currentDescriptionHasLinks(description) {
  return description.spans.some((span) => span.type === "hyperlink");
}

const TextBlock = ({ slice }) => {
  return (
    <Stack as="section" spacing="0.5">
      <Heading
        size={headingTranslations[slice.primary.title[0]?.type]}
        color="brand"
      >
        <RichText render={slice.primary.title} />
      </Heading>

      {slice.primary.description.map((item) => {
        return (
          <Text
            textDecor={currentDescriptionHasLinks(item) && "underline"}
            color={
              currentDescriptionHasLinks(item) ? "#E2E8F0" : "textSecondary"
            }
            key={item.text}
          >
            <RichText render={[item]} />
          </Text>
        );
      })}

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
};

export default TextBlock;
