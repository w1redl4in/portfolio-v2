import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
} from "@chakra-ui/react";
import { useAppSelector } from "@redux/hooks";
import {
  closeGamificationModal,
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
          <Button
            onClick={handleCloseGamificationModal}
            colorScheme="yellow"
            mr={3}
          >
            <Text fontWeight="bold" fontFamily="Heebo">
              Continuar navegação
            </Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
