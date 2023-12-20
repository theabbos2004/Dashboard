import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "../Reducer/MenuReducer";
import UsersReducer from "../Reducer/UsersReducer";

let store=configureStore({
    reducer:{
        menu:StoreReducer,
        users:UsersReducer
    }
})
export default store