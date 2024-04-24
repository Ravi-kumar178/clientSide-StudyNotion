import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import countrycode from '../../../data/countrycode.json'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../../Services/Operations/SettingsAPI';


function EditProfile() {
  const genders = ["Prefer not to say", "Male", "Female", "Non-Binary", "Other"];
  const {
      register,
      handleSubmit,
      formState : {errors}
  } = useForm();

  const {user} = useSelector((state)=>state.profile);
  console.log("user: ", user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth);
 
  async function onSubmitHandler(data){
    console.log("formData: ",data);

    try{
       dispatch(updateProfile(token,data));
    }
    catch(err){
      console.log("ERROR MESSAGE - ", err.message)
    }

  }

  return (
    
       <div className='mt-6 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-md
                       flex flex-col gap-y-6'>
       {/* profile information */}
        <div className=' font-inter font-semibold text-lg text-richblack-50'>Profile Information</div>

        {/* form */}
      <form onSubmit={handleSubmit(onSubmitHandler)} className='relative'>

        <div className='w-full flex flex-col gap-y-4'>
            <div className='w-full flex gap-x-5'>
                <div className='w-full flex flex-col gap-y-1'>
                  <label htmlFor='firstName'
                   className='text-richblack-25 font-inter text-sm font-normal'
                  >Display Name<sup className=' text-pink-200 '>*</sup></label>

                  <input 
                   type='text'
                   name='firstName'
                   id='firstName'
                   placeholder="Enter First Name"
                   defaultValue={user?.firstName}
                   {...register("firstName",{required:true})}
                   className='pl-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                  />
                  <p className='text-xs font-normal font-inter text-richblack-300'>Name entered above will be used for all issued certifies.</p>
                  {
                    errors.firstName &&(
                      <span className='text-xs font-normal font-inter text-richblack-300'>All fields are required</span>
                    )
                  }
                </div>

                <div className='w-full flex flex-col gap-y-1'>
                  <label
                   className='text-richblack-25 font-inter text-sm font-normal'
                  htmlFor='lastName'>Last Name<sup className=' text-pink-200 '>*</sup></label>

                  <input
                   type='text'
                   name='lastName'
                   id='lastName'
                   defaultValue={user?.lastName}
                   placeholder='Enter Last Name'
                   {...register("lastName",{required: true})}
                   className='pl-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                  />
                  {
                    errors.lastName && (
                      <span className='text-xs font-normal font-inter text-richblack-300'>Last Name is required</span>
                    )
                  }
                </div>
            </div>

            <div className='w-full flex gap-x-5'>
                <div className='w-full flex flex-col gap-y-1 relative'>
                   <label 
                    className='text-richblack-25 font-inter text-sm font-normal'
                   htmlFor='dateOfBirth'>Date of Birth<sup className=' text-pink-200 '>*</sup></label>
                   <input
                    type='date'
                    id='dateOfBirth'
                    name='dateOfBirth'
                    defaultValue={user?.additionalDetails?.dateOfBirth}
                    placeholder='dd/mm/yyyy'
                    {...register("dateOfBirth",{
                      required:{
                        value: true,
                        message: "date of birth is required"
                      },
                      max:{
                        value: new Date().toISOString().split("T")[0],
                        message: "Date of birth cannot be in future"
                      }
                    })}
                    className='p-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                   />
                    
                   {
                    errors.dateOfBirth && (
                      <span>{errors.dateOfBirth.message}</span>
                    )
                   }
                </div>

                <div className='w-full flex flex-col gap-y-1'>
                  <label 
                  className='text-richblack-25 font-inter text-sm font-normal'
                  htmlFor='gender'>Gender<sup className=' text-pink-200 '>*</sup></label>
                  <select
                   id='gender'
                   name='gender'
                   defaultValue={user?.additionalDetails?.gender}
                   {...register("gender",{required:true})}
                   className='px-3 py-2.5 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                  >
                    {
                      genders.map((data,index)=>(
                        <option value={data} key={index} >{data}</option>
                      ))
                    }
                  </select>
                  {
                    errors.gender && (
                      <span>Please enter your Date of Birth.</span>
                    )
                  }
                </div>
            </div>

            <div className='w-full flex gap-x-5'>
                <div className='w-full flex flex-col gap-y-1'>
                  <label 
                  className='text-richblack-25 font-inter text-sm font-normal'
                  htmlFor='contactNumber'>Phone Number<sup>*</sup></label>
                  <div className='flex gap-x-2'>
                    <select className=' w-[20%] text-richblack-100 bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'>
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
                      type='tel'
                      id='contactNumber'
                      name='contactNumber'
                      {...register("contactNumber",{
                        required:{
                          value:true,
                          message:"Please enter your contact number"
                        },
                        maxLength:{
                          value:12,
                          message:"Invalid Contact Number"
                        },
                        minLength:{
                          value:10,
                          message:"Invalid Contact Number"
                        }
                      })}
                      className='w-[75%] text-richblack-100 bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                    />
                    {
                      errors.contactNumber && (
                        <span>{errors.contactNumber.message}</span>
                      )
                    }
                  </div>
                </div>

                <div className='w-full flex flex-col gap-y-1'>
                    <label
                     className='text-richblack-25 font-inter text-sm font-normal'
                    htmlFor='about'>About<sup>*</sup></label>
                    <input
                     type='text'
                     id='about'
                     name='about'
                     defaultValue={user?.additionalDetails?.about}
                     placeholder='Enter Bio Details...'
                     {...register("about",{required:true})}
                     className='px-3 py-2.5 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                    />
                    {
                      errors.about && (
                        <span>Write something about yourself</span>
                      )
                    }
                </div>
            </div>

            {/* button */}
            <div className='flex flex-row mt-6  items-center gap-x-5 translate-x-[80%] '>
                <button
                onClick={()=>{navigate("/dashboard/my-profile")}}
                className=' bg-richblack-600 shadow-inner p-2 px-4 rounded-md text-richblack-25 font-inter'
                >
                Cancel
                </button>

                <button
                className=' bg-yellow-50 shadow-inner p-2 px-5 rounded-md text-richblack-900 font-inter'
                type='submit'>
                    Save
                </button>

            </div>
        </div>
        
      </form>
      </div>
    
  )
}

export default EditProfile