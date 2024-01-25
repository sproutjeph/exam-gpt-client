import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import modalsReducer from "@/featuers/modals/modalSlice";
import askAiReducer from "@/featuers/askAiSlice";
import cbTestReducer from "@/featuers/CBtest";
import apiLimitCountReducer from "@/featuers/apiLimitCount";
import userRrducer from "@/featuers/userSlice";

export const store = configureStore({
  reducer: {
    user: userRrducer,
    askAi: askAiReducer,
    modals: modalsReducer,
    cbTest: cbTestReducer,
    apiLimitCount: apiLimitCountReducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
