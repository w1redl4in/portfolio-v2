import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

const ExpMultiplicatorByLevel = new Map();
ExpMultiplicatorByLevel.set(1, 1);
ExpMultiplicatorByLevel.set(2, 0.8);

const initialState = {
  level: 1,
  levelIncreased: false,
  exp: 0,
  ExpMultiplicator: ExpMultiplicatorByLevel.get(1),
};

export const expSlice = createSlice({
  name: "exp",
  initialState,
  reducers: {
    increaseLevel: (state) => {
      state.level = state.level + 1;
    },
    increaseExp: (state) => {
      if (state.exp >= 100) {
        state.level = state.level + 1;
        state.levelIncreased = true;
        state.exp = 0;
        state.ExpMultiplicator = ExpMultiplicatorByLevel.get(state.level);
        return;
      }
      state.levelIncreased = false;
      state.exp = state.exp + 10 * state.ExpMultiplicator;
    },
  },
});

export default expSlice.reducer;

export const selectExp = (state: RootState) => state.exp;

export const { increaseExp, increaseLevel } = expSlice.actions;
