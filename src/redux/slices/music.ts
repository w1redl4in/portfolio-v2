import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

const initialState = {
  musicName: "",
  playedSeconds: undefined,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    saveInfo: (state, action) => {
      state.musicName = action.payload;
    },
    savePlayedSeconds: (state, action) => {
      state.playedSeconds = action.payload;
    },
  },
});

export default musicSlice.reducer;
export const selectMusic = (state: RootState) => state.music;
export const { saveInfo, savePlayedSeconds } = musicSlice.actions;
