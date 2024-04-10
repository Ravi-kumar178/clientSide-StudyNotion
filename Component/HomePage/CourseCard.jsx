import React from 'react'

import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

function CourseCard({courseData,currentCard, setCurrentCard}) {
    console.log(courseData);
    console.log(currentCard);
  return (
    <div className=' w-[90%]  md:w-full font-inter mx-auto'>
        
      
            <div className={`w-full pt-8 pb-6 pl-6 flex flex-col transition-all duration-200 ${courseData.heading === currentCard ? "bg-white  shadow-[12px_12px_0_0] shadow-yellow-50":"bg-richblack-800"}`}
                onClick={()=>setCurrentCard(courseData?.heading)}>
                    <div className={`flex flex-col gap-3 pb-20 mx-auto border-b-2 border-dashed 
                      ${courseData?.heading === currentCard?"border-[#C5C7D4]":"border-[#424854]"}`}>
                        <div className={`text-xl font-semibold font-inter ${courseData?.heading === currentCard? "text-richblack-800":"text-richblack-5"}`}>{courseData.heading}</div>
                        <div className=' text-pure-greys-400 '>{courseData.description}</div>
                    </div>
                  
                    <div className={`flex flex-row items-center justify-between pt-3 pr-3 font-medium font-inter
                     ${courseData?.heading === currentCard ? " text-blue-800":"text-richblack-400"}`}>
                        <div className='flex flex-row items-center gap-2'>
                            <HiUsers/>
                            <p>Beginner</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                        <ImTree/>
                        <p>6 Lessons</p>
                        </div>
                    </div>
                </div>
       
    </div>
  )
}

export default CourseCard