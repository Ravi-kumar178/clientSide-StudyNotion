import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function ChipInput({label,name,placeholder,register,errors,setValue,getValues}) {

    const [tags,setTags] = useState([]);
    /* console.log(tags); */
    const{course,editCourse} = useSelector((state)=>state.course)

    useEffect(()=>{
        register(name,{
            required: true
        })
        if(editCourse){
            setTags(JSON.parse(course.tags));
            setValue(name,JSON.parse(course.tags));
        }
    },[]);

  return (
    <div className='flex flex-col gap-y-1'>
        <label
         className='text-richblack-25 font-inter text-sm'
         >{label}<sup className='text-pink-200'>*</sup></label>

         <div className='flex flex-row items-center gap-x-3'>
            {
                tags.map((data,index)=>{
                    return(
                        <div key={index} className='flex items-center gap-x-1 bg-yellow-100 px-2 text-richblack-900 rounded-full'>
                            <div className='mb-[3px]'>{data}</div>
                            <button
                             onClick={(e)=>{
                                e.preventDefault();
                                const updatedTags = [...tags];
                                updatedTags.splice(index,1);
                                setTags(updatedTags);
                                setValue(name,updatedTags);
                             }}
                            >
                                <FaTimes className='font-normal'/>
                            </button>
                        </div>
                    )
                })
            }
         </div>

        <input
         type='text'
         name={name}
         id={name}
         placeholder={placeholder}
         className='pl-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
         onKeyDown={(e)=>{
            if(e.key === 'Enter' || e.key === 'Tab'){
                e.preventDefault();
                if(e.target.value){
                    setTags([...tags,e.target.value]);
                    setValue(name,[...tags,e.target.value]);
                    e.target.value=""
                }
            }
         }}
        />
    </div>
  )
}

export default ChipInput