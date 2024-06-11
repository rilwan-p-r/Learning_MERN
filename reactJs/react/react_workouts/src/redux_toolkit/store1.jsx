import valReducer from "./valReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        value:valReducer
    }
})
