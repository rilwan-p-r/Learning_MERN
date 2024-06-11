
import { createSlice } from "@reduxjs/toolkit";

const valReducer = createSlice({
    name:'storage',
    initialState:{
        text:''
    },
    reducers:{
        handleText:(state,action)=>{
            state.text = action.payload
        }
    }
})
export const {handleText}=valReducer.actions
export default valReducer.reducer