import { configureStore } from "@reduxjs/toolkit";
import DataStructures from "./slices/DataStructures";
export const store = configureStore({
    reducer: {DataStructures},
})