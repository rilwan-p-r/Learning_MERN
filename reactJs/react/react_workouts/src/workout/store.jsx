import { configureStore } from "@reduxjs/toolkit";
import valReducers from "./reducers";

export const store = configureStore({
    reducer:{
        storage:valReducers
    }
})