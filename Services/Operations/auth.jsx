import toast from 'react-hot-toast'
import {setLoading, setSignupData, setToken} from '../../Slices/AuthSlice'
import {apiConnector} from '../apiConnector'
import { endPoints } from '../api'
import { setUser } from '../../Slices/profileSlice';

const {LOGIN_API , SENDOTP_API} = endPoints;

export function login(email, password, navigate){
    return async(dispatch) => {
        let toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
           /*  console.log(email,password);
            console.log(LOGIN_API); */
            const result = await apiConnector("POST",LOGIN_API,{email,password});
            console.log("Login API response: ",result);
            if(!result.data.success){
                throw new Error(result.data.message);
            }
            /* console.log(result.data.token); */
            dispatch(setToken(result.data.token));
            const userImage = result?.data?.user?.image? 
            (result.data.user.image)
            :
            (`https://api.dicebear.com/5.x/initials/svg?seed=${result?.data?.user?.firstName} ${result?.data?.user?.lastName}`);
             dispatch(setUser({...result.data.user,image: userImage}));

             localStorage.setItem("token",JSON.stringify(result.data.token));
             localStorage.setItem("user", JSON.stringify(result.data.user));
             toast.success("Logged in");
             navigate("/dashboard/my-profile");
        }
        catch(err){
            console.log("Log in error: ",err.message);
            toast.error("Login Failed");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function sendOTP(email,navigate){
    /* console.log("send otp"); */
    return async(dispatch)=>{
        let toastId = toast.loading("Sending...");
        setLoading(true);

        try{
            
            const response = await apiConnector("POST",SENDOTP_API,{email});
            /* console.log("Response: ", response); */
            if(!response.status.success){
                throw new Error(response.data.message);
            }
            toast.success("OTP sent");
            navigate("/verify-email");
        }
        catch(err){
            console.log("Error: ", err.message);
            toast.error("Request failed");
        }
        toast.dismiss(toastId);
        setLoading(false);
    }
}