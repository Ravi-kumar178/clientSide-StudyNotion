import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../Services/Operations/auth';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

function UpdatePassword() {
    const {loading} = useSelector((state)=>state.auth);
    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const[formData, setFormData] = useState({password:"",confirmPassword:""});
    function changeHandler(e){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    function submitHandler(e){
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return
        }

        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword(formData.password,formData.confirmPassword,token,navigate));
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
            <div  className=' font-semibold text-3xl font-inter text-[#F1F2FF]'>
                Choose  new password
            </div>

            <div className=' text-[#AFB2BF] font-inter text-lg font-normal'>
                Almost done. Enter your new password and you're all set.
            </div>

             <form 
                className='flex flex-col gap-y-4'
                 onSubmit={submitHandler}>
                <label className='flex flex-col gap-y-1 relative'>
                    <p className='text-richblack-50 font-inter font-medium text-sm'>New password<sup className='font-normal  text-[#EF476F]'>*</sup></p>

                    <input
                     type={showPassword?"text":"password"}
                     placeholder='*****'
                     name='password'
                     onChange={changeHandler}
                     value={formData.password}
                     className=' bg-richblack-700 p-2  shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                    />

                    <span 
                     onClick={()=>(setShowPassword(!showPassword))}
                    className=' absolute right-2 bottom-5 transform translate-y-1.5 cursor-pointer' >
                        {
                            showPassword?<AiOutlineEyeInvisible/>
                            :
                            <AiOutlineEye/>
                        }
                    </span>
                </label>

                <label  className='flex flex-col gap-y-1 relative'>
                    <p className='text-richblack-50 font-inter font-medium text-sm'>Confirm new password<sup className='font-normal  text-[#EF476F]'>*</sup></p>

                    <input
                     type={showConfirmPassword?"text":"password"}
                     placeholder='*****'
                     name='confirmPassword'
                     onChange={changeHandler}
                     value={formData.confirmPassword}
                     className=' bg-richblack-700 p-2  shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                    />

                    <span 
                        onClick={()=>(setShowConfirmPassword(!showConfirmPassword))}
                    className=' absolute right-2 top-1/2 transform translate-y-1.5 cursor-pointer'>
                        {
                            showConfirmPassword?<AiOutlineEyeInvisible/>
                            :
                            <AiOutlineEye/>
                        }
                    </span>
                </label>

                <button 
                className='mt-7 bg-yellow-50 font-medium font-inter shadow-inner text-richblack-900 py-2 rounded-md'
                type='submit'>
                    Reset Password
                </button>
             </form>


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

export default UpdatePassword