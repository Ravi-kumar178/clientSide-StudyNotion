import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPasswordToken } from '../Services/Operations/auth';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function ForgotPassword() {

    const[emailSent, setEmailSent] = useState(false);
    const {loading} = useSelector((state)=>state.auth);
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        dispatch(getPasswordToken(email,setEmailSent));
    }

  return (
    <div className='text-richblack-5 min-h-[calc(100vh-3.5rem)] font-inter  flex justify-center items-center'>

        {
            loading?
            (
                <div className='spinner'></div>
            )
            :
            (
                <div className='w-[30%] font-inter flex flex-col gap-y-4'>
                    <div>
                        {
                            !emailSent? 
                            (
                            <p className='font-semibold text-3xl font-inter text-[#F1F2FF]'>Reset your password</p>
                            )
                            :
                            (
                                <p className='font-semibold text-3xl font-inter text-[#F1F2FF] '>Check email</p>
                            )
                        }
                    </div>
                    <div>
                    {
                        !emailSent?
                        (
                            <p className=' text-[#AFB2BF] font-inter text-lg font-normal'>Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery</p>
                        )
                        :
                        (
                            <p className=' text-[#AFB2BF] font-inter text-lg font-normal'>{`We have sent the reset email to
                            ${email}`}</p>
                        )
                    }
                    </div>

                    <div>
                       <form
                        className='flex flex-col gap-y-4'
                        onSubmit={submitHandler}>
                        {
                            !emailSent && (
                                
                                <label className='flex flex-col gap-y-1'>
                                    <p className='text-richblack-50 font-inter font-medium text-sm'>Email Address<sup className='font-normal  text-[#EF476F]'>*</sup></p>
                                    <input
                                     type='email'
                                     placeholder='myemailaddress@gmail.com'
                                     required
                                     name='email'
                                     onChange={(e)=>{setEmail(e.target.value)}}
                                     value={email}
                                     className=' bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                                    />
                                </label>
                                    
                                
                            )
                        }

                        <button
                         className=' bg-yellow-50 font-medium font-inter shadow-inner text-richblack-900 py-2 rounded-md'
                        type='submit'>
                            {
                                !emailSent?("Reset Password"):("Resend Email")
                            }
                        </button>
                         
                       </form>  
                    </div>

                     <Link to={"/login"}>
                        <div className='flex flex-row gap-x-2 items-center'>
                            <FaArrowLeftLong/>
                            <p>Back to login</p>
                        </div>
                     </Link>
               </div>
            )
        }

    </div>
  )
}

export default ForgotPassword