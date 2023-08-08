import { configureStore } from '@reduxjs/toolkit';
import characterSlice from "./characterSlice";

const store = configureStore({
  reducer: {
    characters: characterSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
