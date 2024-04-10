import React from 'react'
import CTAButton from './CTAButton'
import { FaArrowRight } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'


function CodeBlock({position,heading,subheading,ctabtn1,ctabtn2 , codeblock,codecolor}) {
  return (
    <div className={`flex flex-col  items-start sm:items-center lg:items-start ${position}  w-full gap-12 lg:gap-16 `}>
        <div className=' w-full  flex flex-col items-start sm:items-center  lg:items-start gap-2'>
            <div className=''>
                {heading}
            </div>
            <div className=' text-richblack-200 w-[85%] sm:w-[100%] lg:w-[90%]'>
                {subheading}
            </div>

            <div className='flex flex-row gap-6 mt-10'>
                <div>
                    <CTAButton active={true} link={ctabtn1.link}>
                        <div className='flex flex-row items-center gap-2'>
                            {ctabtn1.text}
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                </div>
               <div>
                    <CTAButton
                      active={ctabtn2.active}
                      link = {ctabtn2.link}
                    >
                        {ctabtn2.text}
                        </CTAButton>
                </div>
            </div>    
        </div>

     {/*Section 2 */}   

     <div className=' codeblock_gradient  flex flex-row px-4 text-[14px] w-[90%] md:w-[85%] border border-richblack-800 py-4'>
        <div className='flex flex-col  w-[10%] font-inter font-bold text-richblack-5 h-fit'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
        </div>
        <div className={`w-[90%]  font-bold ${codecolor} `}>
            <TypeAnimation
               sequence = {[codeblock,2000,""]}
               repeat = {Infinity}
               cursor = {true}
               style={
                {
                    whiteSpace:"pre-line",
                    display:"block"
                }
               }
               omitDeletionAnimation= {true}
            />
        </div>
     </div>

    </div>
  )
}

export default CodeBlock