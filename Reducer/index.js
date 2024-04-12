import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import profileSlice from "../Slices/profileSlice";
import cartSlice from "../Slices/cartSlice";

const rootReducer = combineReducers({
    auth:AuthSlice,
    profile:profileSlice,
    cart: cartSlice
});

export default rootReducer