import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useAppSelector } from "@redux/hooks";
import {
  closeMaxLevelGamificationModal,
  selectGamificationModal,
} from "@redux/slices/gamification-modal";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import FancyText from "@carefully-coded/react-text-gradient";
import { Lottie } from "@components/Lottie";
import MaxLevel from "@lotties/max-level.json";
import { useResponsive } from "@hooks/use-responsive";

export function GamificationModalMaxLevel() {
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  const { isMaxLevelGamificationModalOpen } = useAppSelector(
    selectGamificationModal
  );

  const lottieWidthAndHeight = useMemo(() => {
    if (isMobile) return 150;
    return 200;
  }, [isMobile]);

  const handleCloseGamificationModal = useCallback(() => {
    dispatch(closeMaxLevelGamificationModal());
  }, [dispatch]);

  return (
    <Modal
      size={["xs", "md", "lg", "lg"]}
      isCentered
      isOpen={isMaxLevelGamificationModalOpen}
      onClose={() => {}}
      preserveScrollBarGap
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent background="modalBackground">
        <ModalHeader textAlign="center" />
        <ModalBody>
          <Stack textAlign="center">
            <Lottie
              animationData={MaxLevel}
              width={lottieWidthAndHeight}
              height={lottieWidthAndHeight}
              speed={5}
            />
            <Heading fontFamily="Bungee" color="yellow.400" size="lg">
              <FancyText
                gradient={{ from: "#FFE259", to: "#FFA751", type: "linear" }}
                animate
                animateDuration={500}
              >
                Level Máximo
              </FancyText>
            </Heading>
            <Text fontFamily="Bungee" fontWeight="medium" color="white">
              Você alcançou o level máximo atual!
            </Text>

            <Text fontWeight="medium" color="white">
              No momento este é o level máximo, <br /> mas estarei sempre
              atualizando e trazendo mais conteúdos!
            </Text>

            <Text fontWeight="medium" color="white">
              Espero que tenha se divertido!
            </Text>
          </Stack>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="center">
          <Button
            onClick={handleCloseGamificationModal}
            colorScheme="yellow"
            mr={3}
          >
            <Text fontFamily="Heebo">Continuar navegação</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
