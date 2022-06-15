import { configureStore } from "@reduxjs/toolkit";
import expReducer from "@redux/slices/exp";
import gamificationModalReducer from "@redux/slices/gamification-modal";
import portfolioBehaviorReducer from "@redux/slices/portfolio-behavior";

export const store = configureStore({
  reducer: {
    exp: expReducer,
    gamificationModal: gamificationModalReducer,
    portfolioBehavior: portfolioBehaviorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
