import React from 'react'
import HighlightText from '../Component/HomePage/HighlightText'
import img1 from "../assets/Images/aboutus1.webp"
import img2 from "../assets/Images/aboutus2.webp"
import img3 from "../assets/Images/aboutus3.webp"
import HighlightText2 from '../Component/About/HighlightText2'
import img4 from "../assets/Images/FoundingStory.png"
import Counter from '../Component/About/Counter'
import LearningGrid from '../Component/About/LearningGrid'
import ContactForm from "../Component/Common/ContactForm"
import Footer from '../Component/Common/Footer'

function About() {
  return (
    <div className=''>
       <div>
            {/* First section */}
               <div className='w-full bg-richblack-700  '>
                   
                    <div className='w-11/12 font-inter max-w-maxContent mx-auto py-20 pb-80  flex flex-col items-center gap-y-6'>
                        <p className='text-richblack-200 font-medium text-center'>About us</p>
                        <div className='w-[65%]  flex flex-col gap-y-4 items-center'>
                            <p className='text-richblack-5 text-4xl font-semibold text-center font-inter'>Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"}/></p>
                            <p className='text-richblack-200 font-inter font-medium text-center'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                        </div>
                    </div>
               </div>
            {/*Image section */}    
                <div className='w-11/12 max-w-maxContent mx-auto -mt-60 '>
                        <div className='flex flex-row items-center gap-x-6'>
                            <img src={img1} alt='Image'/>
                            <img src={img2} alt='Image' className=' '/>
                            <img src={img3} alt='Image'/>
                        </div>
                </div>

             {/*Third section text */}     
                <div className='w-11/12 max-w-maxContent mx-auto py-20 '>
                    <p className='text-4xl font-semibold font-inter text-richblack-200 text-center'><span className='text-6xl text-richblack-500'>“</span> <span>{" "}We are passionate about revolutionizing the way we learn. Our innovative platform 
                    <HighlightText text={"combines technology"}/>
                    ,
                    <HighlightText2 text={"expertise"}/>
                    , and community to create an 
                    <HighlightText2 text={"unparalleled educational experience."}/></span>
                     <span className='text-5xl text-richblack-500'>”</span>
                    </p>
                </div>

                <div className='h-[0.5px] w-full bg-richblack-400'></div>

              {/*Fourth section - founding story */}  
              <div className='w-11/12 my-24 flex iems-center gap-x-20 max-w-maxContent mx-auto'>
                <div className='w-[45%] flex flex-col justify-center mx-auto gap-y-6'>
                   <p className='bg-gradient-to-r text-4xl font-semibold font-inter from-[#FD1D1D]  to-[#FCB045] text-transparent bg-clip-text '>Our Founding Story</p>
                   <div className='flex flex-col gap-y-4 text-richblack-200 font-inter font-medium'>
                     <p >Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                     <p>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                   </div>
                </div>

                <div className='w-[40%] mx-auto'>
                    <img src={img4} alt='founding story' className='w-full'/>
                </div>
              </div>

              {/*5th section */}
               <div className='w-11/12 my-24  max-w-maxContent mx-auto'>
                 
                 <div className=' w-full flex iems-center gap-x-20'>
                     
                    <div className=' flex flex-col gap-y-4'>
                        <p className='text-4xl font-semibold font-inter'><HighlightText2 text={"Our Vision"}/></p>
                        <p className='font-medium font-inter text-richblack-200'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                    </div>

                    <div className=' flex flex-col gap-y-4'>
                        <p className='text-4xl font-semibold font-inter'><HighlightText text={"Our Mission"}/></p>
                        <p className='font-medium font-inter text-richblack-200'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                    </div>
                 </div>

               </div>

               {/*count up section */}

             <div className='bg-richblack-700 py-6'>
                <div className='w-11/12 max-w-maxContent my-24 mx-auto'>
                    <div className='w-[80%] flex items-center justify-between mx-auto '>
                        <Counter end={5000}  desc={"Active Students"}/>
                        <Counter end={10} desc={"Mentors"}/>
                        <Counter end={200} desc={"Courses"}/>
                        <Counter end={50} desc={"Awards"}/>
                    </div>
                </div>
             </div>

              {/*learning grid */}
             <div className='w-11/12 my-24 max-w-maxContent mx-auto'>
                <LearningGrid/>
             </div>

             {/*form section */}
             <div className='w-11/12 my-24 mt-28 max-w-maxContent mx-auto'>

                <div className='flex flex-col justify-center gap-y-8'>
                   <div className='flex flex-col gap-y-4'>
                     <div className='text-4xl font-semibold font-inter text-center text-richblack-5'>Get in Touch</div>
                     <div className='font-inter font-medium text-center text-richblack-100'>We’d love to here for you, Please fill out this form.</div>
                   </div>
                   <div className='w-[60%] mx-auto'>
                      <ContactForm/>
                   </div>
                </div>

             </div>

             {/*review section */}

             {/*footer section */}
             <div>
              <Footer/>
             </div>
        </div>

    </div>
  )
}

export default About