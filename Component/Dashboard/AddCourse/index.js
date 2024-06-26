import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import RenderSteps from './RenderSteps';


const array = [
    {
        title:"Home",
        link: "/"
    },
    {
        title: "Dashboard",
        link: "/dashboard/my-profile"
    },
    {
        title: "Add-Course",
        link: "/dashboard/add-course"
    },
]


function Index() {
    
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({path:route},location.pathname)
    }

  return (
    <div className='w-[1000px] flex items-start gap-x-8'>
        <div className='w-full'>
            <div className='flex gap-x-4 items-center'>
                {
                    array.map((data,index)=>{
                        return(
                            <div key={index} className={` text-richblack-200 
                            ${matchRoute(data.link) ?"text-yellow-50":"text-richblack-200 "}
                            ${index < 2 && " border-r-[1px] border-richblack-200"}
                            `}>
                                <Link to={data.link} className='pr-4'>
                                    {data.title}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-full'>
                <RenderSteps/>
            </div>
        </div>
        <div className='text-white w-[70%] p-6 rounded-md bg-richblack-800 border border-richblack-700
                        flex flex-col gap-y-5 '>
            <div className='font-inter text-lg font-semibold text-richblack-5'>⚡Course Upload Tips</div>
            <div className=''>
                <ul className='ml-6 list-disc flex flex-col gap-y-3'>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Set the Course Price option or make it free.</li>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Standard size for the course thumbnail is 1024x576.</li>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Video section controls the course overview video.</li>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Course Builder is where you create & organize a course.</li>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Course Builder is where you create & organize a course.</li>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Information from the Additional Data section shows up on the course single page.</li>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Make Announcements to notify any important</li>
                    <li className='text-xs font-inter font-medium text-richblack-25'>Notes to all enrolled students at once.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Index