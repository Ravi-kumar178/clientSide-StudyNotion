import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem("token")?
           JSON.parse(localStorage.getItem("token")): null
}

const AuthSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setToken(state,value){
            state.token = value.payload
        }
    }
});

export const {setToken} = AuthSlice.actions;
export default AuthSlice.reducer