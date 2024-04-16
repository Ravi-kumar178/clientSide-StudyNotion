import toast from 'react-hot-toast'
import {setLoading, setSignupData, setToken} from '../../Slices/AuthSlice'
import {apiConnector} from '../apiConnector'
import { endPoints } from '../api'
import { setUser } from '../../Slices/profileSlice';
import { resetCart } from '../../Slices/cartSlice';

const {LOGIN_API , SENDOTP_API, GETPASSWORDTOKEN_API, RESET_PASSWORD_API, SIGNUP_API} = endPoints;

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
     console.log("send otp"); 
    return async(dispatch)=>{
        console.log("email: ",email);
        let toastId = toast.loading("Sending...");
        dispatch( setLoading(true));

        try{
            
            const response = await apiConnector("POST",SENDOTP_API,{email});
            console.log("Response: ", response);
            console.log(response.data.success);
            if(!response.data.success){
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
        dispatch(setLoading(false));
    }
}

export function getPasswordToken(email,setEmailSent){
    return async(dispatch)=>{
        let toastId = toast.loading("Loading...");
        setLoading(true);
        console.log(email);
        try{
            const response = await apiConnector("POST",GETPASSWORDTOKEN_API,{email});
            console.log("response: ", response);
            /* console.log(response.data.message); */
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            setEmailSent(true);
            toast.success("check your mail");
        }
        catch(err){
             console.log("Error while sending mail");
             toast.error("Error in Sending mail");
        }
        toast.dismiss(toastId);
        setLoading(false);
    }
}

export function logout(navigate){
    return async(dispatch)=>{
        dispatch(setToken(null));
        dispatch(setUser(null));
        dispatch(resetCart(null));

        localStorage.removeItem("token");
        localStorage.removeItem("cart");
        localStorage.removeItem("user");
        toast.success("Logged out");
        navigate("/");
    }
}

export function resetPassword(password,confirmPassword,token,navigate){
    return async(dispatch)=>{
        let toastId = toast.loading("Loading...");
         dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",RESET_PASSWORD_API,{password,confirmPassword,token});
            console.log("response: ", response);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success(response.data.message);
            navigate("/login");
        }
        catch(err){
            console.log("error", err.message);
            toast.error("Request Failed");
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export function signup(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate)
{
    return async(dispatch)=>{
        let toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        console.log(accountType,firstName,lastName,email,password,confirmPassword,otp);
        try{
            const response = await apiConnector("POST",SIGNUP_API,{
                accountType,firstName,lastName,email,password,confirmPassword,otp
            });
            console.log("response: ", response);

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("User is registered");
            navigate("/login");
        }
        catch(e){
            toast.error("Request Failed");
            console.log("error: ",e.message);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}