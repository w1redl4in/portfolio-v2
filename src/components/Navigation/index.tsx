import { HStack, Link } from "@chakra-ui/react";

export function Navigation() {
  return (
    <HStack mr={5}>
      <Link>Social Medias</Link>
      <Link>Experiências</Link>
      <Link>Curiosidades</Link>
    </HStack>
  );
}
