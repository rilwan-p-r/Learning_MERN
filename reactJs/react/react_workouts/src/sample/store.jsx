import valReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, valReducer);
export const store = configureStore({
    reducer:{
        storage:persistedReducer    
    }
})

export const persistor = persistStore(store);