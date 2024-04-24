import React from 'react'
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProfile } from '../../../Services/Operations/SettingsAPI';

function DeleteAccount() {

  const{token} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitHandler(){
    try{
        dispatch(deleteProfile(token,navigate));
    }
    catch(err){
      console.log("Error while deleting...",err.message);
    }
  }

  return (
    <div
    className='mt-6 bg-pink-900 border-[1px] border-pink-700 p-6 rounded-md
    flex gap-x-5 '>
        
          <div
           onClick={submitHandler}
          className='bg-[#691432] h-10 cursor-pointer w-10 p-2 rounded-full'>
              <FiTrash2 size={24} className='text-pink-500 font-bold'/>
          </div>
        

        <div className='flex flex-col gap-y-2'>
          <div className='font-inter text-lg font-bold text-richblack-25'>Delete Account</div>
          <div className='  flex flex-col gap-y-[2px] w-[75%]'>
            <p className='font-inter font-medium text-sm text-richblack-50'>Would you like to delete account?</p>
            <p className='font-inter font-medium text-sm text-richblack-50'>This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
          </div>
           
            <div
             onClick={submitHandler}
            className='cursor-pointer font-inter italic font-medium text-pink-200'>
            I want to delete my account.
            </div>
           
        </div>
    </div>
  )
}

export default DeleteAccount