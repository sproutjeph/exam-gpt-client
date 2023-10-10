import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import modalsReducer from "@/featuers/modals/modalSlice";
import askAiReducer from "@/featuers/askAiSlice";
import cbTestReducer from "@/featuers/CBtest";
import apiLimitCountReducer from "@/featuers/apiLimitCount";
import userRrducer from "@/featuers/userSlice";
import { apiSlice } from "@/featuers/auth/apiSlice";
import authReducer from "@/featuers/auth/authSlice";

export const store = configureStore({
  reducer: {
    user: userRrducer,
    askAi: askAiReducer,
    modals: modalsReducer,
    cbTest: cbTestReducer,
    apiLimitCount: apiLimitCountReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// call the refresh token endpoint on every page load
const intializeApp = async () => {
  await store.dispatch(
    apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true })
  );

  await store.dispatch(
    apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};
intializeApp();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
