import { configureStore } from "@reduxjs/toolkit";
import valueReducers from './reduceers'

export const store = configureStore({
    reducer:{
        storage:valueReducers
    }
    
})