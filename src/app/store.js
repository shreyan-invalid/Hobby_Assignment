import { configureStore } from '@reduxjs/toolkit';
import HobbySlice from '../Slices/HobbySlice';
import userSlice from '../Slices/userSlice';

export const store = configureStore({
  reducer: {
    hobby: HobbySlice,
    user: userSlice
  },
});
