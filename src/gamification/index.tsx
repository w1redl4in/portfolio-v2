import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useAppSelector } from "@redux/hooks";
import {
  closeGamificationModal,
  GamificationModalMap,
  selectGamificationModal,
} from "@redux/slices/gamification-modal";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

export function GamificationModalRoot() {
  const dispatch = useDispatch();

  const { component, isGamificationModalOpen } = useAppSelector(
    selectGamificationModal
  );

  const handleCloseGamificationModal = useCallback(() => {
    dispatch(closeGamificationModal());
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
    >
      <ModalOverlay />
      <ModalContent background="background">
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
            Continuar navegação
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
