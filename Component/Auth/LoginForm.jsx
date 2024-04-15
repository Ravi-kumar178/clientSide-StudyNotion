import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link , useNavigate} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {login} from '../../Services/Operations/auth'
 

function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[accountType,setAccountType] = useState("student");
    const [formData, setFormData] = useState({email:"",password:""});
    const[showPassword, setShowPassword] = useState(false);
    console.log(accountType)
    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function onSubmitHandler(event){
        event.preventDefault();
        dispatch(login(formData.email,formData.password,navigate));
    }

  return (
    <div className=' text-richblack-50 w-full font-inter'>

           <form 
           className='flex flex-col gap-10 w-full'
           onSubmit={onSubmitHandler}
           >
               <div className="flex flex-row items-center justify-center gap-3 py-1 px-3 bg-richblack-700 rounded-full shadow-sm shadow-white w-fit">
                    <button
                        onClick={() => setAccountType("student")}
                        className={`cursor-pointer px-4 py-1 rounded-full transition-all duration-200 focus:outline-none 
                            ${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "text-richblack-25 hover:bg-richblack-600"}`}
                    >
                        Student
                    </button>

                    <button
                        onClick={() => setAccountType("instructor")}
                        className={`cursor-pointer px-4 py-1 rounded-full transition-all duration-200 focus:outline-none
                            ${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "text-richblack-25 hover:bg-richblack-600"}`}
                    >
                        Instructor
                    </button>
               </div>


               <div className='flex flex-col gap-6 w-full'> 
            
                <label className='flex flex-col gap-1 w-full'>
                    <p className=' text-richblack-25 font-normal text-sm'>Email Address<sup className='font-normal text-lg text-[#EF476F]'> *</sup></p>

                    <input
                    type='email'
                    placeholder='Enter email address'
                    required
                    name='email'
                    onChange={changeHandler}
                    value={formData.email}
                    className='w-[450px] bg-richblack-700 py-2 px-2 shadow shadow-richblack-200 rounded-md'
                    />
                </label>

                <label className='w-[450px] flex flex-col gap-1  relative'>
                    <p className=' text-richblack-25 font-normal text-sm'>Password<sup className='font-normal text-lg text-[#EF476F]'>*</sup></p>

                    <input
                     required
                     type={showPassword?'text':'password'}
                     placeholder='Enter Password'
                     name='password'
                     onChange={changeHandler}
                     value={formData.password}
                     className='w-full bg-richblack-700 py-2 px-2 shadow shadow-richblack-200 rounded-md'
                    />

                    <span onClick={()=>(setShowPassword(!showPassword))}
                     className=' absolute right-2 top-1/2 transform translate-y-1.5 cursor-pointer'>
                        {
                            showPassword?<AiOutlineEyeInvisible/>:
                                         <AiOutlineEye/>
                        }
                    </span>

                     <Link to={"/forgot-password"}>
                         <div className='font-inter absolute right-2 text-sm font-normal text-blue-200'>Forgot Password</div>
                     </Link>
                </label>

                <button type='submit' className='w-full bg-yellow-50 text-xl text-richblack-900 py-2 rounded-lg my-8 shadow-inner font-inter'>
                    Sign in
                </button>
             </div>
       </form>
    </div>
  )
}

export default LoginForm