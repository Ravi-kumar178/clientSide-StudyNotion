import React, { useState } from 'react'
import countrycode from "../../data/countrycode.json"
import { useDispatch, useSelector } from 'react-redux';
import { contactService } from '../../Services/Operations/contactOperations';

function ContactForm() {

    const [formData, setFormData] = useState({firstName:"",
                                            lastName:"",
                                            email:"",
                                            countryNum:"",
                                            phoneNumber:"",
                                            message:"",
                                            });

                                        
    function changeHandler(e){
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name] : e.target.value,
        }))
    } 

    const dispatch = useDispatch();
    
    function submitHandler(e){
        e.preventDefault();
       /*  console.log("formData: ", formData); */
        dispatch(contactService(formData.firstName,formData.lastName,formData.email,formData.phoneNumber,formData.message));
        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            phoneNumber:"",
            message:""
        })
    }

  return (
    <div>
     <form
      onSubmit={submitHandler}
      className='flex flex-col gap-y-6 text-richblack-5'
     >
        <div className='w-full flex flex-row items-center gap-x-5'>
              <div className='w-full flex flex-col gap-y-1'>
                <label className='text-richblack-50 font-inter font-medium text-sm'>First Name<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name...'
                  value={formData.firstName}
                  onChange={changeHandler}
                  required
                  className='w-full bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                />
              </div>

              {/*last name */}
              <div className='w-full flex flex-col gap-y-1'>
                <label className='text-richblack-50 font-inter font-medium text-sm'>Last Name<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name...'
                  value={formData.lastName}
                  onChange={changeHandler} 
                  required 
                  className='w-full bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                />
              </div>
            </div>
            {/* email */}
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
            {/* phone number */}
            <div className='flex flex-col gap-y-1'>
               <label  className='text-richblack-50 font-inter font-medium text-sm'>Phone Number<sup  className='font-normal  text-[#EF476F]'>*</sup></label>
               
                  <div className='flex gap-x-2'>
                    <select className=' w-[15%] text-richblack-200 bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'>
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
                      name='phoneNumber'
                      required
                      value={formData.phoneNumber}
                      onChange={changeHandler}
                      className='w-[100%] bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                    />
                  </div>
               
            </div>
            {/* message */}
            <div className='flex flex-col gap-y-1'>
                <label className='text-richblack-50 font-inter font-medium text-sm'>Message<sup className='font-normal  text-[#EF476F]'>*</sup></label>
                <textarea
                 rows={6}
                 cols={60}
                 name='message'
                 required
                 value={formData.message}
                 onChange={changeHandler}
                 className=' bg-richblack-700 p-2 shadow-inner border-b-[1px] border-b-richblack-400 rounded-md'
                />
            </div>
            {/* button */}
            <div>
               <button
                type='submit'
                className=' capitalize w-full bg-yellow-50 text-xl text-richblack-900 py-2 rounded-lg my-8 shadow-inner font-inter'>send message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm