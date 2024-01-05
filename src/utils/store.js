import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import userReducer from "./userSlice";


const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        chat : chatSlice,
        user : userReducer
    }
})

export default store;