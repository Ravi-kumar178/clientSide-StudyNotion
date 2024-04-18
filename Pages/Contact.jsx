import React from 'react'
import { HiChatBubbleLeftRight, HiGlobeEuropeAfrica } from "react-icons/hi2";
import { MdCall } from "react-icons/md";
import Footer from '../Component/Common/Footer';
import ContactForm from '../Component/Common/ContactForm';

function Contact() {
  return (
    <div className=''>
        <div className=' w-11/12 max-w-maxContent mx-auto  flex items-start gap-x-14 font-inter px-24 py-32'>
            <div className='flex w-[60%] p-6 flex-col gap-y-4 items-center rounded-xl text-richblack-50  bg-richblack-700'>
                <div className='p-4 w- flex flex-row items-start gap-x-2'>
                  <HiChatBubbleLeftRight size={24} className='mt-1'/>
                  <div className='flex flex-col  gap-y-0'>
                    <p className='text-lg font-semibold font-inter'>Chat on us</p>
                    <p className='font-medium text-sm font-inter'>Our friendly team is here to help.</p>
                    <p className='text-sm font-semibold font-inter'>bhardwajravi2025@gmail.com</p>
                  </div>
                </div>

                <div className='flex flex-row items-start gap-x-2'>
                  <HiGlobeEuropeAfrica size={24} className='ml-4'/>
                  <div className='flex flex-col  gap-y-0'>
                    <p className='text-lg font-semibold font-inter'>Visit us</p>
                    <p className='font-medium text-sm font-inter'>Come and say hello at our office HQ.</p>
                    <p className='text-sm font-semibold font-inter'>New Delhi, Delhi</p>
                  </div>
                </div>

                <div className='flex flex-row items-start gap-x-2'>
                  <MdCall size={24} className='-ml-10'/>
                  <div className='flex flex-col  gap-y-0'>
                    <p className='text-lg font-semibold font-inter'>Call us</p>
                    <p className='font-medium text-sm font-inter'>Mon - Fri From 8am to 5pm</p>
                    <p className='text-sm font-semibold font-inter'>+91-7061250417</p>
                  </div>
                </div>
            </div>

            <div className=' w-[100%] flex flex-col gap-y-3 border-[1px] font-inter border-richblack-800 p-4 px-8 mx-auto rounded-xl'>
                <p className=' text-richblack-25 text-4xl  font-semibold '>Got a Idea? We’ve got the skills. Let’s team up</p>
                <p className='font-inter font-medium text-richblack-200'>Tall us more about yourself and what you’re got in mind.</p>
                <div className='font-inter mt-4'>
                    <ContactForm/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact