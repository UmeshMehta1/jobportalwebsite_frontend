import { configureStore } from "@reduxjs/toolkit";

const authSlice = require("./authslice");


const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
    }
})

export default store;


