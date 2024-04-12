import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link , useNavigate} from 'react-router-dom';
import {toast} from 'react-hot-toast'
 

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const[accountType,setAccountType] = useState("student");
    const [formData, setFormData] = useState({email:"",password:""});
    const[showPassword, setShowPassword] = useState("false");
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
        setIsLoggedIn(true);
        navigate("/dashboard");
        toast.success("Logged in");
    }

  return (
    <div className=' text-richblack-50 w-full font-inter'>

           <form 
           className='flex flex-col gap-10 w-full'
           onSubmit={onSubmitHandler}
           >
                <div className='flex flex-row items-center justify-center py-1 px-3 gap-3 bg-richblack-700  rounded-full
                               shadow-sm shadow-white w-fit'>
                    <div className={`${accountType==="student"?" bg-richblack-900 text-richblack-5  px-4 py-1 rounded-full transition-all duration-200":""}`}
                     onClick={()=>{setAccountType("student")}}>Student</div>

                    <div
                     className={`${accountType==="instructor"?" bg-richblack-900 text-richblack-5 px-4 py-1 rounded-full transition-all duration-200":""}`}
                    onClick={()=>{setAccountType("instructor")}}>Instructor</div>
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
                     type={showPassword?"password":"text"}
                     placeholder='Enter Password'
                     name='password'
                     onChange={changeHandler}
                     value={formData.password}
                     className='w-full bg-richblack-700 py-2 px-2 shadow shadow-richblack-200 rounded-md'
                    />

                    <span onClick={(prev)=>{setShowPassword(!prev)}}
                     className='w-full absolute left-2 top-5'>
                        {
                            showPassword?<AiOutlineEye/>:
                                         <AiOutlineEyeInvisible/>
                        }
                    </span>

                     <Link to={"/forget-password"}>
                         <div>Forget Password</div>
                     </Link>
                </label>

                <button type='submit'>
                    Sign in
                </button>
             </div>
       </form>
    </div>
  )
}

export default LoginForm