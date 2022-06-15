import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

const initialState = {
  showIntroduction: false,
};
export const portfolioBehaviorSlice = createSlice({
  name: "portfolioBehavior",
  initialState,
  reducers: {
    showIntroduction: (state) => {
      state.showIntroduction = true;
    },
  },
});

export default portfolioBehaviorSlice.reducer;

export const selectPortfolioBehavior = (state: RootState) =>
  state.portfolioBehavior;

export const { showIntroduction } = portfolioBehaviorSlice.actions;
