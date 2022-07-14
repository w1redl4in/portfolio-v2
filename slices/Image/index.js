import React from "react";
import { RichText } from "prismic-reactjs";
import { Stack, Image as ChakraImage, Center, Text } from "@chakra-ui/react";

const Image = ({ slice }) => (
  <Center>
    <Stack>
      <ChakraImage
        maxW="50rem"
        w="100%"
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
      />
      <Text color="gray.600" textAlign="center">
        <RichText render={slice.primary.caption} />
      </Text>
    </Stack>
  </Center>
);

export default Image;
