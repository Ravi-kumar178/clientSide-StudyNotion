import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';

function Requirement({name,label,placeholder,register,getValues, setValue}) {

    const[requirement, setRequirement] = useState("");
    const[requirementList, setRequirementList] = useState([]);
   /*  console.log(requirement);
    console.log(requirementList); */

    useEffect(()=>{
        register(name,{required: true});
    },[])

    useEffect(()=>{
        setValue(name,requirementList);
    },[requirementList]);


  return (
    <div className='flex flex-col items-start gap-y-1 w-full'>
        <label className='text-richblack-25 font-inter text-sm'>{label}<sup className='text-pink-200'>*</sup></label>
        <input
         type='text'
         name={name}
         id={name}
         placeholder={placeholder}
         value={requirement}
         onChange={(e)=>setRequirement(e.target.value)}
         className='pl-3 py-2 w-full text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
        />
        <button onClick={(e)=>{
            e.preventDefault();
            if(requirement){
                setRequirementList([...requirementList,requirement]);
                setRequirement("");
            }
            }}
            className='font-inter font-bold text-yellow-50'
            >Add</button>

         <div>
           {
            requirementList.map((data,index)=>{
                return(
                    <div key={index} className='text-sm text-richblack-300 flex items-center gap-x-4'>
                        {data}
                        <button
                         onClick={(e)=>{
                            e.preventDefault();
                            const updatedRequirementList = [...requirementList];
                            updatedRequirementList.splice(index,1);
                            setRequirementList(updatedRequirementList);
                         }}
                        className=' bg-richblack-900 p-1 rounded-full' >
                            <FaTimes size={12}/>
                        </button>
                    </div>

                )
            })
           } 
         </div>   
    </div>
  )
}

export default Requirement