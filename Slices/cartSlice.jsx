import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalItem : localStorage.getItem("totalItem")?
          JSON.parse(localStorage.getItem("totalItem")):
          []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,

    reducers:{
        setTotalItem(state,value){
            state.totalItem = value.payload
        }
    }
});

export const{setTotalItem} = cartSlice.actions;
export default cartSlice.reducer;