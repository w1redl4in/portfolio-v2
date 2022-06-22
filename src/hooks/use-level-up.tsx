import { MAX_LEVEL } from "@constants/exp";
import { useAppSelector } from "@redux/hooks";
import { selectExp } from "@redux/slices/exp";
import {
  openGamificationModal,
  openMaxLevelGamificationModal,
  selectGamificationModal,
} from "@redux/slices/gamification-modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useLevelUp() {
  const dispatch = useDispatch();
  const { level, levelIncreased } = useAppSelector(selectExp);
  const { isGamificationModalOpen } = useAppSelector(selectGamificationModal);

  useEffect(() => {
    if (levelIncreased) {
      dispatch(openGamificationModal(level));
    }
  }, [dispatch, level, levelIncreased]);

  useEffect(() => {
    if (level === MAX_LEVEL) {
      dispatch(openMaxLevelGamificationModal());
    }
  }, [dispatch, isGamificationModalOpen, level]);
}
