import { configureStore } from "@reduxjs/toolkit";

import ecommReducer from "./reducer"

const store = configureStore({
    reducer: {
        ecomm: ecommReducer,
    },
});

export default store;