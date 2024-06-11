import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "value",
  initialState: {
    count: 0,
    items: ["apple", "orange", "grapes", "banana", "lemon"],
    searchTerm:''
  },
  reducers: {
    increment: (state, action) => {
       state.count += 1;
    },
    decrement: (state, action) => {
       state.count -= 1;
    },
    incrementFive: (state, action) => {
       state.count += action.payload;
    },
    autoIncrement: (state, action) => {
       state.count += action.payload;
    },
    setSearchItem:(state,action)=>{
         state.searchTerm = action.payload
    }
  },
});
export const { increment, decrement, incrementFive, autoIncrement,setSearchItem } =
  valueSlice.actions;
export default valueSlice.reducer;
