import { useAppSelector } from "@redux/hooks";
import { increaseExp, selectExp } from "@redux/slices/exp";
import { selectGamificationModal } from "@redux/slices/gamification-modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MAX_LEVEL } from "@constants/exp";
import { useExperienceInfo } from "./use-experience-info";

export function useCountExperience() {
  const dispatch = useDispatch();

  const { isGamificationModalOpen } = useAppSelector(selectGamificationModal);

  const { level } = useAppSelector(selectExp);

  const { isUserReadingAnArticle } = useExperienceInfo();

  useEffect(() => {
    if (isUserReadingAnArticle) {
      return;
    }
    if (!isGamificationModalOpen && level < MAX_LEVEL) {
      const interval = setInterval(() => {
        dispatch(increaseExp());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [dispatch, isGamificationModalOpen, isUserReadingAnArticle, level]);
}
