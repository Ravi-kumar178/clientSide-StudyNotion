import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from '../../assets/Images/Know_your_progress.png'
import compareWithOther from '../../assets/Images/Compare_with_others.png'
import planYourLesson from '../../assets/Images/Plan_your_lessons.png'
import CTAButton from './CTAButton'

function LearningLanguageSection() {
  return (
    <div className='pb-10 font-inter mt-16 mx-auto w-full text-center flex flex-col gap-6'>
        <div className='font-bold text-4xl text-richblack-900'>
            Your swiss knife for
            <HighlightText text={"learning any language"}/>
        </div>
        <div className='w-[55%] mx-auto font-medium text-richblack-700'>
          Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className='mt-10 flex flex-row mx-auto w-full gap-0'>
            <img src={knowYourProgress} alt='know-your-progress' className='h-[30%] w-[35%] translate-x-12'/>
            <img src={compareWithOther} alt="compare-with-other" className='h-[30%] w-[35%] -translate-x-9 -translate-y-3'/>
            <img src={planYourLesson} alt="plan-your-lesson" className='h-[30%] w-[35%] -translate-x-40 -translate-y-2'/>
        </div>
        <div className='mx-auto w-fit'>
            <CTAButton active={true} link={"/login"}>
                <p className='text-richblack-900 font-bold'>Learn More</p>
            </CTAButton>
        </div>
    </div>
  )
}

export default LearningLanguageSection