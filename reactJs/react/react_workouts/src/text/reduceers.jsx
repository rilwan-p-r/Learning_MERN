import { createSlice } from "@reduxjs/toolkit";

const valueReducers = createSlice({
  name: "storage",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = valueReducers.actions;
export default valueReducers.reducer;
