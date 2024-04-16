import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { signup } from '../Services/Operations/auth';

function VerifyEmail() {

    const {loading} = useSelector((state)=>state.auth);
    const[otp,setOtp] = useState("");
    const {signupData} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

   
   /*  console.log("otp: ",otp); */
    useEffect(()=>{
        if(!signupData){
            navigate("/signup");
        }
    },[]);

    function submitHandler(e){
       e.preventDefault();
       
       const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        
       } = signupData;
       console.log("signupData: ",signupData);
       dispatch(signup(accountType,firstName,lastName,email,password,confirmPassword,otp, navigate));
    }


  return (
    <div  className=' text-richblack-5 min-h-[calc(100vh-3.5rem)] font-inter  flex justify-center items-center'>
        {
            loading?
            (
                <div className='spinner'></div>
            )
            :
            (
                <div className='w-[30%] font-inter flex flex-col gap-y-4'>
                    <div className=' font-semibold text-3xl font-inter text-[#F1F2FF]'>
                    Verify email
                    </div>

                    <div className=' text-[#AFB2BF] font-inter text-lg font-normal'>
                    A verification code has been sent to you. Enter the code below
                    </div>

                    <form 
                     onSubmit={submitHandler}
                    className='flex flex-col gap-y-4'>
                        <OTPInput
                            
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => <input {...props} 
                            style={{ width: '48px' }} 
                            className="  border-0 bg-richblack-800 rounded-md text-richblack-5 aspect-square text-center "
                             placeholder='-'
                            />}
                            containerStyle={{
                                justifyContent: "space-between",
                                gap: "0 6px",
                                width:"100%"
                              }}
                        />

                        <button 
                        className='mt-7  bg-yellow-50 font-medium font-inter shadow-inner text-richblack-900 py-2 rounded-md'
                        type='submit'>
                            Verify Email
                        </button>
                    </form>

                    <div></div>
                </div>
            )
        }
    </div>
  )
}

export default VerifyEmail