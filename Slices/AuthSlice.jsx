import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    signupData:null,
    token: localStorage.getItem("token")?
           JSON.parse(localStorage.getItem("token")): null,

    loading : false
}

const AuthSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setToken(state,value){
            state.token = value.payload
        },

        setSignupData(state, value){
            state.signupData = value.payload
        },

        setLoading(state,value){
            state.loading = value.payload
        }
    }
});

export const {setLoading, setSignupData, setToken} = AuthSlice.actions;
export default AuthSlice.reducer