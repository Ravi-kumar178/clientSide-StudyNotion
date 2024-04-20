import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import CTAButton from '../HomePage/CTAButton'



const LearningGridArray = [
    {
        order: -1,
        heading:"World-Class Learning for ",
        highlightText: "Anyone, Anywhere",
        description:"Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        btnText:"Learn More",
        btnLink:"/signup"
    },
    {
        order:1,
        heading:"Curriculum Based on Industry Needs",
        description:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        order:2,
        heading:"Our Learning Methods",
        description:"The learning process uses the namely online and offline."
    },
    {
        order:3,
        heading:"Certification",
        description:"You will get a certificate that can be used as a certification during job hunting."
    },
    {
        order:4,
        heading:'Rating  "Auto-grading"',
        description:"You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."
    },
    {
        order:5,
        heading:"Ready to Work",
        description:"Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."
    }
]

function LearningGrid() {

  return (
    <div className=' my-20 w-full mx-auto grid grid-cols-4 grid-rows-2'>
        {
            LearningGridArray.map((data,index)=>{
                return(
                    <div
                className={ `
                 ${index === 0 && (" col-span-2 bg-transparent")}
                 ${index > 0 && index%2 === 0 ? ("bg-richblack-700"):("bg-richblack-600")}
                 ${index === 3 && ("col-start-2")}
                `}
                key={index}
                >
                 {
                    index === 0 ?
                    (
                        <div className='w-[70%] p-2 py-4  mx-auto flex flex-col gap-y-3'>
                           <p className='font-inter text-4xl font-semibold text-richblack-5'>{data.heading} <HighlightText text={data.highlightText}/></p>
                           <p className='font-mdeium font-inter text-richblack-100'>{data.description}</p>
                           <div className='w-fit'>
                              <CTAButton active={true} link={data.btnLink}>
                                <p className='font-inter font-semibold'>{data.btnText}</p> 
                              </CTAButton>
                           </div>
                        </div>

                    )
                    :
                    (
                        <div className='w-[70%] justify-center mx-auto pt-4 flex flex-col gap-y-6 p-2 '>
                            <p className='w-full text-richblack-5 font-inter text-xl font-semibold'>{data.heading}</p>
                            <p className='w-full font-normal text-richblack-100 font-inter text-sm'>{data.description}</p>
                        </div>
                    )
                 }
                </div>
                )
            })
        }
    </div>
    
  )
}

export default LearningGrid