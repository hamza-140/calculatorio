// redux/boardingSlice.js
import {createSlice} from '@reduxjs/toolkit';

export const boardingSlice = createSlice({
  name: 'boarded',
  initialState: {
    value: false, // Default to false
  },
  reducers: {
    launched: state => {
      state.value = true;
    },
    notLaunched: state => {
      state.value = false;
    },
  },
});

export const {launched, notLaunched} = boardingSlice.actions;

export const selectBoarding = state => state.boarded.value;

export default boardingSlice.reducer;
