import { useAppSelector } from "@redux/hooks";
import { increaseExp, selectExp } from "@redux/slices/exp";
import {
  openGamificationModal,
  openMaxLevelGamificationModal,
  selectGamificationModal,
} from "@redux/slices/gamification-modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MAX_LEVEL } from "@constants/exp";

export function useCountExperience() {
  const dispatch = useDispatch();

  const { isGamificationModalOpen } = useAppSelector(selectGamificationModal);

  const { levelIncreased, level } = useAppSelector(selectExp);

  useEffect(() => {
    if (!isGamificationModalOpen && level < MAX_LEVEL) {
      const interval = setInterval(() => {
        dispatch(increaseExp());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [dispatch, isGamificationModalOpen, level]);

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
