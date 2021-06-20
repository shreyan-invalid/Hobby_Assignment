import { configureStore } from '@reduxjs/toolkit';
import HobbySlice from '../Slices/HobbySlice';

export const store = configureStore({
  reducer: {
    hobby: HobbySlice,
  },
});
