import React from 'react'
import instructor from '../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAButton from './CTAButton'
import { FaArrowRight } from 'react-icons/fa'

function InstructorSection() {
  return (
    <div className='w-11/12 max-w-maxContent min-h-screen mt-20 flex  flex-row items-center justify-center mx-auto gap-16'>
      <div className='w-[45%] relative'>
        <div className='w-[90%] h-[450px] bg-white'></div>
        <div className='absolute top-3 left-4'>
            <img src={instructor} alt='instructor' className='w-[95%]'/>
        </div>
      </div>
        <div className='flex flex-col items-start gap-6 w-[38%] font-inter'>
            <div className=' w-[70%] text-richblack-5 text-4xl font-semibold'>
                Become an <HighlightText text={"Instructor"}/>
            </div>
            <div className=' text-richblack-400 font-medium'>
             Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </div>
            <div className='mt-8'>
                <CTAButton active={true} link={"/signup"}>
                    <div className='flex flex-row items-center gap-2 text-richblack-900 font-medium'>
                     Start Teaching Today
                     <FaArrowRight/>
                    </div>
                </CTAButton>
            </div>
        </div>
    </div>
  )
}

export default InstructorSection