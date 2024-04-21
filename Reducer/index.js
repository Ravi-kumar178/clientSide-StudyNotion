import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import profileSlice from "../Slices/profileSlice";
import cartSlice from "../Slices/cartSlice";
import CourseSlice from "../Slices/CourseSlice";

const rootReducer = combineReducers({
    auth:AuthSlice,
    profile:profileSlice,
    cart: cartSlice,
    course: CourseSlice
});

export default rootReducer