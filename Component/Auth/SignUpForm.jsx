import React, { useState } from 'react'
import countrycode from "../../data/countrycode.json"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setSignupData } from '../../Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { sendOTP } from '../../Services/Operations/auth';

function SignUpForm() {
  /* console.log(countrycode); */
  const[accountType, setAccountType] = useState("Student");
  const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});

  const dispatch = useDispatch();

  function changeHandler(event){
    setFormData((prevData)=>({
      
        ...prevData,
        [event.target.name] : event.target.value
      
    }))
  }

  const[showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
 const navigate = useNavigate();

  function onSubmitHandler(event){
   /*  console.log("submit handler called"); */
    event.preventDefault();
/*     console.log("formData: ", formData); */
    const signupObject = {
      ...formData,
      accountType
    }
    console.log("signupObject: ", signupObject);
    if(formData.password !== formData.confirmPassword){
      toast.error("Password do not match");
      return
    }

    dispatch(setSignupData(signupObject));
    dispatch(sendOTP(formData.email, navigate));
    //Reset formdata
    setFormData({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:""
    });
    setAccountType("Student");
    
  }

  return (
    <div className='mt-5 flex flex-col  gap-y-5'>
        <div className="flex flex-row items-center justify-center gap-3 py-1 px-3 bg-richblack-700 rounded-full shadow-sm shadow-white w-fit">
                    <button
                        onClick={() => setAccountType("Student")}
                        className={`cursor-pointer px-4 py-1 rounded-full transition-all duration-200 focus:outline-none 
                            ${accountType === "Student" ? "bg-richblack-900 text-richblack-5" : "text-richblack-25 hover:bg-richblack-600"}`}
                    >
                        Student
                    </button>

                    <button
                        onClick={() => setAccountType("Instructor")}
                        className={`cursor-pointer px-4 py-1 rounded-full transition-all duration-200 focus:outline-none
                            ${accountType === "Instructor" ? "bg-richblack-900 text-richblack-5" : "text-richblack-25 hover:bg-richblack-600"}`}
                    >
                        Instructor
                    </button>
        </div>

        <form onSubmit={onSubmitHandler} className='flex flex-col mt-5  gap-y-5'>
            <div className='flex flex-row items-center gap-x-5'>
              <div className='flex flex-col gap-y-1'>
                <label className='text-richblack-50 font-inter font-medium text-sm'>First Name<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name...'
                  value={formData.firstName}
                  onChange={changeHandler}
                  required
                  className=' bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                />
              </div>

              {/*last name */}
              <div className='flex flex-col gap-y-1'>
                <label className='text-richblack-50 font-inter font-medium text-sm'>Last Name<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name...'
                  value={formData.lastName}
                  onChange={changeHandler} 
                  required 
                  className=' bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                />
              </div>
            </div>

            <div className='flex flex-col gap-y-1'>
              <label className='text-richblack-50 font-inter font-medium text-sm'>Email Address<sup className='font-normal  text-[#EF476F]'>*</sup></label>
              <input
              type='email'
              required
              name='email'
              value={formData.email}
              onChange={changeHandler}
              placeholder='Enter email address...'
              className=' bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
              />
            </div>

            <div className='flex flex-col gap-y-1'>
               <label  className='text-richblack-50 font-inter font-medium text-sm'>Phone Number<sup  className='font-normal  text-[#EF476F]'>*</sup></label>
               
                  <div className='flex gap-x-2'>
                    <select className=' w-[20%] bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'>
                        {
                          countrycode.map((data,index)=>{
                            return(
                              <option key={index} value={data.code}
                                
                              >{data.code}-{data.country}</option>
                            )
                          })
                        }
                    </select>

                    <input
                     placeholder='12345 67890'
                      type='number'
                      className='w-[75%] bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                    />
                  </div>
               
            </div>

            <div className='flex flex-row items-center gap-x-5'>
               <div className='flex flex-col gap-y-1'>
                  <label  className='text-richblack-50 font-inter font-medium text-sm'>Create Password<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                  <div className='relative'>
                    <input
                    type={showPassword?"text":"password"}
                    name='password'
                    onChange={changeHandler}
                    value={formData.password}
                    placeholder='Enter Password'
                    required
                    className=' bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                    />
                    <span
                     onClick={()=>(setShowPassword(!showPassword))}
                    className='absolute bottom-3 right-4'>
                      {
                        showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
                      }
                    </span>
                  </div>
               </div>

               <div className='flex flex-col gap-y-1'>
                  <label  className='text-richblack-50 font-inter font-medium text-sm'>Confirm Password<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                  <div className=' relative'>
                    <input
                    type={showConfirmPassword?"text":"password"}
                    name='confirmPassword'
                    onChange={changeHandler}
                    value={formData.confirmPassword}
                    placeholder='Enter Password'
                    required
                    className=' bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                    />

                    <span
                     onClick={()=>(setShowConfirmPassword(!showConfirmPassword))}
                    className='absolute bottom-3 right-4'>
                      {
                        showConfirmPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
                      }
                    </span>
                  </div>
               </div>
            </div>

            <div>
               <button
                type='submit'
                className=' capitalize w-full bg-yellow-50 text-xl text-richblack-900 py-2 rounded-lg my-8 shadow-inner font-inter'>create Account</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignUpForm