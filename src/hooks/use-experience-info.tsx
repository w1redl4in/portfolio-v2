import { MAX_LEVEL } from "@constants/exp";
import { useAppSelector } from "@redux/hooks";
import { selectExp } from "@redux/slices/exp";
import { useCallback, useMemo } from "react";

export function useExperienceInfo() {
  const { level, exp, levelIncreased } = useAppSelector(selectExp);

  const isUserAtMaxLevel = useMemo(() => level === MAX_LEVEL, [level]);

  const isUserAtThisLevel = useCallback(
    (userLevel: number) => {
      return level === userLevel;
    },
    [level]
  );

  const isUserAtThisLevelOrGreater = useCallback(
    (userLevel: number) => {
      return level >= userLevel;
    },
    [level]
  );

  return {
    isUserAtMaxLevel,
    exp,
    levelIncreased,
    level,
    isUserAtThisLevel,
    isUserAtThisLevelOrGreater,
  };
}
