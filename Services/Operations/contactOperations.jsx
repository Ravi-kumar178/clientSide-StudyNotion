import toast from "react-hot-toast";
import { contactEndPoints } from "../api";

import { apiConnector } from "../apiConnector";




const {CONTACT_API} = contactEndPoints;

export function contactService(firstName,lastName,email,phoneNumber,message){
    return async(dispatch)=>{
        let toastId = toast.loading("Loading...");
        
        try{
           /*  console.log("formData in operations: ",firstName,lastName,email,phoneNumber,message); */
            /* console.log(CONTACT_API); */
            const response = await apiConnector("POST",CONTACT_API,{firstName,lastName,email,phoneNumber,message});
            console.log(response);

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("Message sent");
        }
        catch(err){
            console.log("Error",err.message);
            toast.error("Error in sending message");
        }
        toast.dismiss(toastId);
       
    }
}