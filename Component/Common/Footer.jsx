import React from 'react'
import footerLogo from '../../assets/Logo/Logo-Full-Light.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FooterLink2 } from '../../data/footer-links';

const companyDetails = ["About","Careers","Affiliates"];
const icons = [
    {
        link : "https://www.facebook.com/",
        logo: <FaFacebook/>
    },
    {
        link: "https://www.google.com",
        logo: <AiFillGoogleCircle/>
    },
    {
        link: "https://www.twitter.com",
        logo: <FaTwitter/>
    },
    {
        link: "https://www.youtube.com",
        logo: <FaYoutube/>
    },
];

/* First row - first part -middle row */
const resources = [
    "Articles", "Blog", "Chart Sheet", "Code Challanges",
    "Docs", "Projects", "Videos", "Workspaces"
];

const plans = ["Paid memberships","For students","Business solutions "];

const policy = ["Privacy Policy","Cookie Policy","Terms"];

function Footer() {
  return (
    <div className='w-full bg-richblack-800 font-inter mx-auto pt-10 pb-10'>
        <div className='w-11/12 max-w-maxContent min-h-fit flex flex-col mx-auto gap-10'>
            {/* upper div */}
            <div className='flex flex-row gap-8 mx-auto'>
             {/* left div */}
                <div className='flex flex-row gap-10 '>
                     {/* LeftMost div */}
                    <div className='  flex flex-col gap-5 items-start'>
                        {/* first col */}
                        <div>
                            <img src={footerLogo} alt='footer-logo' className='w-[80%]'/>
                        </div>

                        {/* second col */}
                        <div className='font-semibold text-xl text-richblack-5 ml-2'>
                            Company
                        </div>

                        {/* third col */}
                        <div className='ml-2 flex flex-col gap-2 text-richblack-400 '>
                            {
                                companyDetails.map((element,index)=>{
                                    return(
                                        <div key={index}>
                                            <Link to={`${element.toLowerCase()}`}>
                                                <div className='hover:text-richblack-5 hover:scale-105 transition-all duration-200'>{element}</div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/*Fourth col */}
                        <div className='flex flex-row items-center gap-4 pl-2'>
                            {
                                icons.map((element,index)=>{
                                    return(
                                        <div key={index} >

                                        <Link to={element.link}>
                                                <div className=' text-richblack-400 text-xl hover:scale-105 hover:text-richblack-5 transition-all duration-200'>
                                                    {element.logo}
                                                </div>
                                        </Link> 

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* middle div */}
                    <div className='flex flex-col gap-8 text-richblack-400'>
                        {/* Resource div */}
                        <div className='flex flex-col gap-6'>
                            <div className=' text-richblack-5 text-lg font-semibold'>Resources</div>
                            <div className='flex flex-col gap-2 text-richblack-400 '>
                                {
                                    resources.map((element,index)=>{
                                        return(
                                            <div key={index}>
                                                <Link to={`/${element.toLowerCase().split(" ").join("-")}`}>
                                                    <div className='hover:text-richblack-5 hover:scale-105 transition-all duration-200'>
                                                        {element}
                                                    </div>
                                                </Link>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                        {/* Support div */}
                        <div className='flex flex-col gap-4'>
                            <div className=' text-richblack-5 text-lg font-semibold'>Support</div>
                            <div>
                                <Link to={"/help-center"}>
                                    <div className=' text-richblack-400 hover:text-richblack-5 hover:scale-105 transition-all duration-200'>Help Center</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                     {/*Rightmost div of upper first container */}
                     <div className='flex flex-col gap-8 ml-14 text-richblack-400'>
                        {/* plan */}
                        <div className='flex flex-col gap-6'>
                            <div className=' text-richblack-5 text-lg font-semibold'>Plans</div>
                            <div className='flex flex-col gap-2 text-richblack-400 '>
                                {
                                    plans.map((element,index)=>{
                                        return(
                                            <div key={index}>
                                                <Link to ={`/${element.toLowerCase().split(" ").join("-")}`}>
                                                    <div className='hover:text-richblack-5 hover:scale-105 transition-all duration-200'>
                                                        {element}
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* Community */}
                        <div></div>
                     </div>

                     {/* border */}
                     <div className='w-[1px] h-full bg-richblack-600 ml-10'></div>
                </div>
               

             {/* Right div */}   
                <div className='pl-10 w-full flex flex-row gap-8 font-inter text-richblack-400 mx-auto'>
                    {/* left most div */}
                    <div>
                        <div className='flex flex-row gap-20 w-full '>
                        {
                            FooterLink2.map((element,index)=>{
                                return(
                                    <div key={index} className='flex flex-col gap-6'>
                                        <div className='font-semibold text-lg text-richblack-5 w-full'>{element.title}</div>
                                         <div className='flex flex-col gap-2 '>
                                            {
                                                element.links.map((element,index)=>{
                                                    return(
                                                        <div key={index}>
                                                            <Link to={element.link}>
                                                                <div className='w-[110%] hover:text-richblack-5 hover:scale-105 transition-all duration-200'>{element.title}</div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                         </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                       
                    </div>
                    

                    <div></div>
                    <div></div>
                </div>
            </div>
        
            {/* middle div -- border */}
            <div className='w-full h-[1px] bg-richblack-600 mx-auto'></div>

            {/* Lower div  */}
            <div className='font-inter flex flex-row justify-between items-center'>
                {/* Privacy policy container */}
                <div className='flex flex-row gap-4'>
                    {
                        policy.map((element,index)=>{
                            return(
                                <div key={index} className='flex flex-row gap-4'>
                                    <Link to={`${element.toLowerCase().split(" ").join("-")}`}>
                                        <div className={`text-richblack-400 font-medium hover:text-richblack-5 hover:scale-105 transition-all duration-200`}>{element}</div>
                                    </Link>
                                    <div className={`w-[1px] h-full bg-richblack-400 ${index === policy.length -1 ?
                                    "hidden":"block" }`}></div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='font-medium text-richblack-400 '>
                  Made with <span className='text-[#EF476F]'>♥</span> Ravi © 2023 Studynotion
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer