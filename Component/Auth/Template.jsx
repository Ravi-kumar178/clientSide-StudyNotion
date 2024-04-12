 import React from 'react'
 import frameImg from "../../assets/Images/frame.png"
 import LoginForm from './LoginForm'
 import SignUpForm from './SignUpForm'

 function Template({title,desc1,desc2,formType,image,setIsLoggedIn}) {
    
   return (
     <div className=' font-inter text-richblack-50 w-11/12 max-w-maxContent min-h-fit'>

         <div className='mt-20 px-8 w-full flex flex-row gap-10 mx-auto items-center justify-center'>

            <div className='max-w-[450px] w-11/12 flex flex-col items-start mx-auto gap-5 '>
                <div className=' text-richblack-25 font-semibold text-3xl'>{title}</div>

                <div className=' text-richblack-100 font-normal text-lg'>{desc1}<span className='font-bold font-edu-sa text-[#47A5C5]'>{desc2}</span></div>

            

                <div>
                {
                    formType=== "login"?<LoginForm setIsLoggedIn={setIsLoggedIn}/>:<SignUpForm/>
                }
                </div>
            </div>


            <div className='relative'>
                <img src={frameImg} alt='frame' className='w-[558px] h-[504px]'></img>
                <img src={image} alt='frame' className='w-[558px] h-[504px] absolute bottom-6 right-6'></img>
            </div>

         </div>

     </div>
   )
 }
 
 export default Template