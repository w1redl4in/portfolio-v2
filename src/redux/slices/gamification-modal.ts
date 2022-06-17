import { GamificationIntroductionModal } from "@gamification/modals/introduction";
import { GamificationModalLevel2 } from "@gamification/modals/level-2";
import { GamificationModalMaxLevel } from "@gamification/modals/max-level";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export enum GamificationModalPerLevelEnum {}
export enum GamificationModalEnum {
  INTRODUCTION,
  LEVEL_2,
  LEVEL_3,
  MAX_LEVEL,
}

export const GamificationModalMap = new Map();

GamificationModalMap.set(
  GamificationModalEnum.INTRODUCTION,
  GamificationIntroductionModal
);
GamificationModalMap.set(
  GamificationModalEnum.LEVEL_2,
  GamificationModalLevel2
);

GamificationModalMap.set(
  GamificationModalEnum.MAX_LEVEL,
  GamificationModalMaxLevel
);

const initialState = {
  isGamificationModalOpen: true,
  isMaxLevelGamificationModalOpen: false,
  component: GamificationModalEnum.INTRODUCTION,
};

export const gamificationModalSlice = createSlice({
  name: "gamificationModal",
  initialState,
  reducers: {
    openGamificationModal: (state, action: PayloadAction<number>) => {
      const currentLevel = action.payload;
      state.isGamificationModalOpen = true;
      state.component = currentLevel - 1;
    },
    closeGamificationModal: (state) => {
      state.isGamificationModalOpen = false;
      state.component = GamificationModalEnum.INTRODUCTION;
    },
    openMaxLevelGamificationModal: (state) => {
      state.isMaxLevelGamificationModalOpen = true;
    },
    closeMaxLevelGamificationModal: (state) => {
      state.isMaxLevelGamificationModalOpen = false;
    },
  },
});

export default gamificationModalSlice.reducer;

export const selectGamificationModal = (state: RootState) =>
  state.gamificationModal;

export const {
  openGamificationModal,
  closeGamificationModal,
  openMaxLevelGamificationModal,
  closeMaxLevelGamificationModal,
} = gamificationModalSlice.actions;
