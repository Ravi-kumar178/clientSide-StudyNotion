import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { changePassword } from '../../../Services/Operations/SettingsAPI';
import toast from 'react-hot-toast';

function UpdatePassword() {

  const[showOldPassword, setShowOldPassword] = useState(false);
  const[showNewPassword, setShowNewPassword] = useState(false);
  const[showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const{register, handleSubmit, formState:{errors} } = useForm();
  const {user} = useSelector((state)=>state.profile);
  console.log("user: ",user);

  const {token} = useSelector((state)=>state.auth);
  

  async function onSubmitHandler(data){
    try{
       await changePassword(token,data);
    }
    catch(err){
      console.log("error message: ",err.message);
    }
  }

  return (
    <div className=' w-full mt-6 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-md
    flex flex-col gap-y-6'>
        <div className='w-full font-inter font-semibold text-lg text-richblack-50'>Password</div>

        <form 
         onSubmit={handleSubmit(onSubmitHandler)}
        className='w-full'>
          <div className='w-full flex flex-row items-center gap-x-5'>
                <div className='w-full flex flex-col gap-y-1'>
                    <label htmlFor='oldPassword'  className='text-richblack-50 font-inter font-medium text-sm'>Current Password<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                    <div className='relative'>
                      <input
                      type={showOldPassword?"text":"password"}
                      name='oldPassword'
                      id='oldPassword'
                      placeholder='*******'
                      {...register("oldPassword",{required:true})}
                      className='w-full text-richblack-200 bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                      />
                      <span
                      onClick={()=>(setShowOldPassword(!showOldPassword))}
                      className='absolute bottom-3 right-4 text-richblack-200'>
                        {
                          showOldPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
                        }
                      </span>
                      {
                        errors.oldPassword && (
                          <span>old password is required</span>
                        )
                      }
                    </div>
                </div>

                <div className='w-full flex flex-col gap-y-1'>
                    <label htmlFor='newPassword' className='text-richblack-50 font-inter font-medium text-sm'>New Password<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                    <div className=' relative'>
                      <input
                      type={showNewPassword?"text":"password"}
                      name='newPassword'
                      id='newPassword'
                      placeholder='*******'
                      {...register("newPassword",{required:true})}
                      className='w-full text-richblack-200 bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                      />

                      <span
                      onClick={()=>(setShowNewPassword(!showNewPassword))}
                      className='absolute bottom-3 right-4 text-richblack-200'>
                        {
                          showNewPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
                        }
                      </span>
                      {
                        errors.newPassword && (
                          <span>New password is required</span>
                        )
                      }
                    </div>
                </div>

                <div className='w-full flex flex-col gap-y-1'>
                    <label htmlFor='confirmNewPassword' className='text-richblack-50 font-inter font-medium text-sm'>Confirm New Password<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                    <div className=' relative'>
                      <input
                      type={showConfirmNewPassword?"text":"password"}
                      name='confirmNewPassword'
                      id='confirmNewPassword'
                      placeholder='********'
                      {...register("confirmNewPassword",{required:true})}
                      className='w-full text-richblack-200 bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                      />

                      <span
                      onClick={()=>(setShowConfirmNewPassword(!showConfirmNewPassword))}
                      className='absolute bottom-3 right-4 text-richblack-200'>
                        {
                          showConfirmNewPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
                        }
                      </span>
                      {
                        errors.confirmNewPassword &&(
                          <span>Confirm new password</span>
                        )
                      }
                    </div>
                </div>

               
          </div>

               <div className='w-full translate-x-[90%]'>
               <button
                className=' mt-10  bg-yellow-50 shadow-inner p-2 px-5 rounded-md text-richblack-900 font-inter'
                type='submit'>
                    Save
                </button>
               </div>
        </form>
    </div>
  )
}

export default UpdatePassword