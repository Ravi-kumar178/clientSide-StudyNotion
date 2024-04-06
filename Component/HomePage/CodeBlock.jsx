import React from 'react'
import CTAButton from './CTAButton'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {TypeAnimation} from 'react-type-animation'


function CodeBlock({position,heading,subheading,ctabtn1,ctabtn2 , codeblock,codecolor}) {
  return (
    <div className={`flex ${position} w-full gap-16 `}>
        <div className='   flex flex-col items-start gap-2'>
            <div>
                {heading}
            </div>
            <div className=' text-richblack-200 w-[90%]'>
                {subheading}
            </div>

            <div className='flex flex-row gap-6 mt-10'>
               <Link to={ctabtn1.link}>
                  <div>
                    <div className={`flex  hover:scale-95 transition-all duration-200 flex-row rounded-md font-inter font-medium justify-center items-center px-4 py-2 gap-2 ${ctabtn1.active?" bg-yellow-50 text-richblack-900":"bg-richblack-700 text-richblack-5"}`}>
                        <p>Try it Yourself</p>
                        <FaArrowRight />
                    </div>
                  </div>
               </Link>
               <div>
                    <CTAButton
                      text={ctabtn2.text}
                      active={ctabtn2.active}
                      link = {ctabtn2.link}
                    />
                </div>
            </div>    
        </div>

     {/*Section 2 */}   

     <div className=' shadow-md shadow-white flex flex-row px-4 text-[14px] w-[85%] border border-richblack-800 py-4'>
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
        <div className={`w-[90%] font-bold ${codecolor} `}>
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