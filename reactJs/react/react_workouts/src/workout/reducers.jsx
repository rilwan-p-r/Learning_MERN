import { createSlice } from "@reduxjs/toolkit";

const valreducers = createSlice({
  name: "storage",
  initialState: {
    count: 0,
    name: "user",
    items: ["apple", "banana", "orange", "grapes", "strawberry"],
    search: "",
  },
  reducers: {
    incrementCount: (state, action) => {
      state.count += 1;
    },
    decrementCount: (state, action) => {
      state.count -= 1;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    SearchItems: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { incrementCount, decrementCount, changeName, SearchItems } =
  valreducers.actions;
export default valreducers.reducer;
