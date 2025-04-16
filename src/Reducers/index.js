import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice.js";
import profileReducer from "../Slices/profileSlice.js";
import cartReducer from "../Slices/cartSlice.js";

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
});

export default rootReducers;