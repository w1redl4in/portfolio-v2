import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

const initialState = {
  showIntroduction: false,
  showHeaderAnimation: false,
};
export const portfolioBehaviorSlice = createSlice({
  name: "portfolioBehavior",
  initialState,
  reducers: {
    showIntroduction: (state) => {
      state.showIntroduction = true;
    },
    showHeaderAnimation: (state) => {
      state.showHeaderAnimation = true;
    },
  },
});

export default portfolioBehaviorSlice.reducer;

export const selectPortfolioBehavior = (state: RootState) =>
  state.portfolioBehavior;

export const { showIntroduction, showHeaderAnimation } =
  portfolioBehaviorSlice.actions;
