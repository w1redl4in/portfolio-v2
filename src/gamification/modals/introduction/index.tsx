import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
export function GamificationIntroductionModal() {
  return (
    <Modal isCentered isOpen onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <Heading as="h1" size="md">
            Bem-vindo ao meu portfolio!
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack textAlign="center" maxW="25rem">
            <Text>Este site é construído com sistema de gamificação.</Text>
            <Text>
              Você ganhará exp durante a navegação e liberará novas áreas e
              efeitos para conhecer mais sobre mim.
            </Text>

            <Text>
              Logo acima no cabeçalho você verá sua barra de experiência
              juntamente com o seu nível.
            </Text>

            <Text>
              Para cada segundo de navegação você ganhará 10 pontos de exp, boa
              sorte e ótima navegação!!
            </Text>

            <Text as="del">
              Os pontos só começarão a contabilizar <br /> após fechar este
              modal.
            </Text>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="yellow" mr={3}>
            Continuar navegação
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
