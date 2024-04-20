import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

const initialState = {
    cart : localStorage.getItem("cart")?
           JSON.parse(localStorage.getItem('cart')):
           [],

    totalPrice : localStorage.getItem('totalPrice')?
                 JSON.parse(localStorage.getItem('totalPrice')):
                 0,

    totalItem : localStorage.getItem('totalItem')?
                 JSON.parse(localStorage.getItem('totalItem')):
                 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers:{
        addToCart: (state,action)=>{
            const course = action.payload;
            //check whether the course is present in cart or not
            const index = state.cart.findIndex((item)=>(item._id === course._id));
            //course present
            if(index>=0){
                toast.error("course already added to the cart");
                return
            }
            //if not course
            state.cart.push(course);
            state.totalItem = state.totalItem + 1;
            state.totalPrice = state.totalPrice + course.price;

            //update to local storage
            localStorage.setItem("cart",JSON.stringify(state.cart));
            localStorage.setItem("totalItem",JSON.stringify(state.totalItem));
            localStorage.setItem("totalPrice",state.totalPrice);

            toast.success("course added successfully");
        },

        removeFromCart : (state,action)=>{
            const course = action.payload;
            const index = state.cart.findIndex((item)=>(item._id === course._id));
            if(index === -1){
                toast.error("course already removed");
            }
            
            state.totalItem = state.totalItem - 1;
            state.totalPrice = state.totalPrice - course.price;
            state.cart.splice(index,1);
            //update to local storage
            localStorage.setItem("cart",state.cart);
            localStorage.setItem("totalItem",state.totalItem);
            localStorage.setItem("totalPrice", state.totalPrice);

            toast.success("course removed successfully");
        },

        resetCart : (state,action)=> {
            state.cart = [];
            state.totalItem = 0;
            state.totalPrice = 0;
            localStorage.setItem("cart",JSON.stringify(state.cart));
            localStorage.setItem("totalItem",JSON.stringify(state.totalItem));
            localStorage.setItem("totalPrice",state.totalPrice);
            
        }
    }
});

export const{addToCart, removeFromCart , resetCart} = cartSlice.actions;
export default cartSlice.reducer;