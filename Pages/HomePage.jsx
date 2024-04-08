import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../Component/HomePage/HighlightText';
import CTAButton from '../Component/HomePage/CTAButton';
import Banner from "../assets/Images/banner.mp4"
import CodeBlock from '../Component/HomePage/CodeBlock';
import TimeLineSection from '../Component/HomePage/TimeLineSection';
import LearningLanguageSection from '../Component/HomePage/LearningLanguageSection';
import InstructorSection from '../Component/HomePage/InstructorSection';
import Footer from '../Component/Common/Footer';
import ExploreMore from '../Component/HomePage/ExploreMore';


function HomePage() {
  return (
    <div>
        {/*Section 1 */}
        <div className='w-11/12 max-w-maxContent min-h-screen pb-4  mx-auto flex flex-col '>
        {/* Section1 */}

        <div className='flex flex-col items-center my-8 mt-16  text-richblack-400 font-inter '>
            <Link to={"/signup"}>
              <div className='group hover:scale-105 transition-all duration-200 '>
               <div className=' group-hover:bg-richblack-900 flex flex-row justify-center items-center gap-2 py-1 font-medium bg-richblack-700 px-4 border-b-2 rounded-full'>
                    <p>Become an Instructor</p>
                    <FaArrowRight/>
                </div>
              </div>
            </Link>

            {/*Heading sub section */}
            <div className='mt-8 font-semibold text-3xl text-white'>
              Empower Your Future with <HighlightText text ="Coding Skills"/>
            </div>

            {/*Sub heading sub section */}
            <div className='w-[60%] text-center mt-4 font-medium text-richblack-200 '>
               With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            {/*CTA button sub section */}
            <div className='flex flex-row gap-4 mt-8'>
                <CTAButton  active={true} link={"/signup"}>Learn More</CTAButton>
                <CTAButton active={false} link={"/login"}>Book a Demo</CTAButton>
            </div>
        </div>

        {/* Section2 -> video */}
        <div className='w-[80%]  mt-8 mx-auto border-b-8 border-r-8 border-r-white border-b-white rounded-bl-3xl rounded-tr-3xl'>
            <video muted autoPlay loop className='z-10 w-full shadow-lg shadow-white'>
                <source src={Banner} type='video/mp4'/>
            </video>
        </div>
        {/* Section3 -> codeblock */}

        <div className='w-[80%] mx-auto mt-20 '>
            <CodeBlock
             position = {"lg:flex-row"}
             heading = {
                <div className='text-4xl font-bold  text-richblack-5'>
                    Unlock Your 
                    <HighlightText text={"Coding Potential"}/>
                    with our online courses.
                </div>
             }
             subheading = {
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
             }

             ctabtn1 = {
                 {
                    text: "Try it Yourself",
                    link: "/signup",
                    active:true
                 }
             }

             ctabtn2 = {
                {
                    text : "Learn More",
                    link: "/login",
                    active: false
                }
             }

             
             codeblock = {
                `<!DOCTYPE html>\n<html>\n<head><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>`
             }
             codecolor = {"text-yellow-25"}

            />
        </div>

        {/* Section4 -> codeblock */}

        <div className='w-[80%] mx-auto mt-20 '>
            <CodeBlock
             position = {"lg:flex-row-reverse"}
             heading = {
                <div className='text-4xl font-bold  text-richblack-5'>
                    Start 
                    <HighlightText text={"Coding in Seconds"}/>
                    
                </div>
             }
             subheading = {
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
             }

             ctabtn1 = {
                 {
                    text: "Continue Lesson",
                    link: "/signup",
                    active:true
                 }
             }

             ctabtn2 = {
                {
                    text : "Learn More",
                    link: "/login",
                    active: false
                }
             }

             
             codeblock = {
                `<!DOCTYPE html>\n<html>\n<head><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>`
             }
             codecolor = {"text-yellow-25"}

            />
        </div>
        {/* Section5 -> card */}

        <ExploreMore/>

        </div>

        {/*Section 2 - white background */}
        <div className='bg-[#F9F9F9]  mx-auto min-h-screen'>
            {/*BackgroundImage section */}
            <div className=' object-contain bg_Image h-[350px] flex justify-center items-center mx-auto gap-7 '>
                <CTAButton active={true} link={"/signup"}>
                    <div className='flex items-center gap-2'>
                        <p>Explore Full Catalog</p>
                        <FaArrowRight/>
                    </div>
                </CTAButton>
                <CTAButton active={false} link={"/login"}>
                    Learn More
                </CTAButton>
            </div>

            {/*Get the skill section */}
            <div className=' mt-20 mb-14 w-11/12 mx-auto max-w-maxContent flex flex-row justify-center items-center gap-10'>
              <div className='w-[45%] text-4xl font-semibold text-richblack-900'> 
              Get the skills you need for a 
              <HighlightText text={" job that is in demand."}/>
              </div>

              <div className='w-[45%] text-pure-greys-600 flex flex-col items-start gap-10'>
                <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                <div className='w-fit '>
                    <CTAButton active={true} link={"/login"}>
                        Learn More
                    </CTAButton>
                </div>
              </div>
            </div>

            {/*Time line section */}
            <div className=' w-11/12 max-w-maxContent mx-auto'>
                <TimeLineSection/>
                <LearningLanguageSection/>
            </div>
        </div>

        {/*Section 3 Instructor */}
        <div className='w-full'>
             <InstructorSection/>

             {/* Review from other learner */}
        </div>

        {/*Footer section */}
         <div>
            <Footer/>
         </div>
    </div>
  )
}

export default HomePage