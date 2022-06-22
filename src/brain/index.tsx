import { GamificationModalRoot } from "@gamification/modals";
import { GamificationModalMaxLevel } from "@gamification/modals/max-level";
import { useLevelUp } from "@hooks/use-level-up";

export function GamificationBrain() {
  useLevelUp();
  return (
    <>
      <GamificationModalMaxLevel />
      <GamificationModalRoot />
    </>
  );
}
