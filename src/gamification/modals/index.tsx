import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useAppSelector } from "@redux/hooks";
import { increaseExpToMaxLevel } from "@redux/slices/exp";
import {
  closeGamificationModal,
  GamificationModalEnum,
  GamificationModalMap,
  selectGamificationModal,
} from "@redux/slices/gamification-modal";
import {
  showHeaderAnimation,
  showIntroduction,
} from "@redux/slices/portfolio-behavior";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

export function GamificationModalRoot() {
  const dispatch = useDispatch();

  const { component, isGamificationModalOpen } = useAppSelector(
    selectGamificationModal
  );

  const handleCloseGamificationModal = useCallback(() => {
    dispatch(closeGamificationModal());
    dispatch(showIntroduction());
    dispatch(showHeaderAnimation());
  }, [dispatch]);

  const handleSkipExpIncrease = useCallback(() => {
    dispatch(closeGamificationModal());
    dispatch(showIntroduction());
    dispatch(showHeaderAnimation());
    dispatch(increaseExpToMaxLevel());
  }, [dispatch]);

  const Component = useMemo(
    () => GamificationModalMap.get(component),
    [component]
  );

  return (
    <Modal
      size={["xs", "md", "lg", "lg"]}
      isCentered
      isOpen={isGamificationModalOpen}
      onClose={() => {}}
      preserveScrollBarGap
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent background="modalBackground">
        <ModalHeader textAlign="center" />
        <ModalBody>
          <Component />
        </ModalBody>

        <ModalFooter display="flex" justifyContent="center">
          <Flex textAlign="center" flexDir="column" gap="1rem">
            <Button onClick={handleCloseGamificationModal} colorScheme="yellow">
              <Text fontFamily="Heebo">Continuar navegação</Text>
            </Button>
            {component === GamificationModalEnum.INTRODUCTION && (
              <Button onClick={handleSkipExpIncrease} colorScheme="yellow">
                <Text fontFamily="Heebo">
                  Continuar navegação com o nível máximo
                </Text>
              </Button>
            )}
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
