import React from 'react'
import logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../assets/Images/TimelineImage.png"

const TimeLine = [
    {
        logo: logo1,
        heading:"Leadership" ,
        subHeading: "Fully committed to the success company"
    },
    {
        logo:logo2 ,
        heading:"Responsibility" ,
        subHeading: "Students will always be our top priority"
    },
    {
        logo: logo3,
        heading:"Flexibility" ,
        subHeading: "The ability to switch is an important skills"
    },
    {
        logo:logo4 ,
        heading:"Solve the problem" ,
        subHeading: "Code your way to a solution"
    }
]

function TimeLineSection() {
  return (
    <div className='pb-20 flex flex-col md:flex-row items-start sm:items-center gap-8'>
        <div className='flex flex-col items-start sm:items-center w-[100%] sm:w-[90%]  md:w-[45%]'>
            {
                TimeLine.map((element,index)=>{
                    return(
                     <div key={index} className='w-full flex flex-col  '>
                        <div key={index} className="flex mx-auto flex-row items-center w-[70%] gap-4 ">
                         <div className='relative'>
                            <div className='bg-white w-10 h-10 rounded-full border shadow-blue-5 shadow border-richblack-5'></div>
                            <img src={element.logo} alt='Leadership log' className='h-6 w-6 absolute top-2 left-2'/>
                         </div>
                         <div>
                            <p className=' font-inter font-semibold text-richblack-800'>{element.heading}</p>
                            <p className='font-inter text-pure-greys-400 text-sm'>{element.subHeading}</p>
                         </div>
                       </div>

                       <div className={`my-2 translate-x-[60px] sm:translate-x-[100px] md:translate-x-[76px] h-12 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px] ${index === 3?"hidden":"block"} block`}></div>
                     </div>   
                      
                      
                    );
                })
            }
        </div>
        <div className=' sm:w-[90%] md:w-[50%] lg:w-[45%] relative'>
            <div className=' w-full'>
                <img src={timelineImage} className='' alt=''/>
            </div>
            <div className='absolute -bottom-10 left-[0%] lg:left-[8%] xl:left-[10%] w-[100%] lg:w-[90%] xl:w-[80%] mx-auto bg-caribbeangreen-600 flex flex-row '>
                <div className='px-8 py-6 flex flex-row items-center w-[90%] sm:w-[80%] xl:w-[70%] gap-4 border-r border-caribbeangreen-300 '>
                    <p className=' text-white font-bold text-2xl sm:text-3xl xl:text-4xl'>10 </p>
                    <p className=' text-richblack-50'>YEARS EXPERIENCES</p>
                </div>
                <div className='px-8 py-6 flex flex-row items-center w-[90%] sm:w-[80%] xl:w-[70%] gap-4  '>
                    <p className=' text-white font-bold text-2xl sm:text-3xl xl:text-4xl'>250</p>
                    <p className=' text-richblack-50'>TYPES OF COURSES</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimeLineSection