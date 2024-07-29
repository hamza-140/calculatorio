// redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import boardingReducer from './boardingSlice';

export const store = configureStore({
  reducer: {
    boarded: boardingReducer,
  },
});
