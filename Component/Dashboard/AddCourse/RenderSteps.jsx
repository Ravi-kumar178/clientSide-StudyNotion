import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import CourseInformation from './CourseInformation';


const steps = [
  {
    id:1,
    title:"Course Information"
  },
  {
    id:2,
    title:"Course Builder"
  },
  {
    id:3,
    title:"Course Publish"
  },
]

function RenderSteps() {
  const {step} = useSelector((state)=>state.course);
  /* console.log(step); */
  return (
    <div className='w-full my-10'>
      <div className=''>
        <div className='flex w-full translate-x-11 items-center'>
          {
            steps.map((data,index)=>{
              return(
                <div key={index}
                 className='flex  w-full justify-between'
                >
                 <div 
                   className={`${data.id === step ? " bg-yellow-900 text-yellow-50 border-[1px] border-yellow-50  ":" bg-richblack-800 text-richblack-200 border-[1px] border-richblack-700 "}
                              rounded-full w-9 aspect-square text-center p-1
                              ${step > data.id && "bg-yellow-50 text-richblack-900"}
                              text-center`} 
                    >
                    {
                      step > data.id? (<FaCheck className='text-center m-1'/>):(data.id)
                      
                    }
                  
                 </div>
                  
                  <div className={`${data.id < 3 && "border-b-[1px] mb-4 border-dashed w-full"}
                   ${step > data.id ? "border-yellow-50":"border-richblack-600"}
                  `}></div> 
                </div>
              )
            })
          }
        </div>
        <div className='w-[78%] flex justify-between items-center mt-4'>
          {
            steps.map((data,index)=>{
              return(
                <div key={index}
                 className={`font-inter text-sm font-normal ${step === data.id?"text-richblack-5":"text-richblack-200"}
                  ${step > data.id && "text-richblack-5"}
                 `}
                >
                  {data.title}
                </div>
              )
            })
          }
        </div>
        
      </div>

      <div className='w-full'>
         {step === 1 && <CourseInformation/>}
      </div>
    </div>
  )
}

export default RenderSteps