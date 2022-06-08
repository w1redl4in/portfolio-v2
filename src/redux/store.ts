import { configureStore } from "@reduxjs/toolkit";
import expReducer from "@redux/slices/exp";
import gamificationModalReducer from "@redux/slices/gamification-modal";

export const store = configureStore({
  reducer: {
    exp: expReducer,
    gamificationModal: gamificationModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
