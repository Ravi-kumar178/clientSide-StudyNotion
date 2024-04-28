import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'
import { fetchInstructorCourses } from '../../../Services/Operations/CourseDetailsAPI';
import { useSelector } from 'react-redux';
import CourseTable from './CourseTable';

function MyCourse() {

    const links = [
        {
            title:"Home",
            link:"/"
        },
        {
            title:"Dashboard",
            link:"/dashboard/my-profile"
        },
        {
            title:"Courses",
            link:"/dashboard/my-courses"
        }
    ]

    const location = useLocation();
   const matchRoute = (routes) =>{
    return matchPath({path:routes},location.pathname);
   }

   const navigate = useNavigate();

   const [courses, setCourses] = useState([]);
   const{token} = useSelector((state)=>state.auth);
   useEffect(()=>{
    const fetchInstructorCourseDetail = async()=>{
        const result = await fetchInstructorCourses(token);
        if(result){
            setCourses(result);
        }
        console.log("courses in myCourse: ",courses);
    }
    fetchInstructorCourseDetail();
   },[]);

  return (
    <div className='px-8 w-[1000px]'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-y-3'>
                <div className='flex flex-row items-center gap-x-3'>
                    {
                        links.map((data,index)=>{
                           return(
                            <div key={index} className=''>
                                <Link to={data.link}>
                                    <p className={`${matchRoute(data.link)?"text-yellow-50":"text-richblack-100 pr-3 border-r border-r-richblack-500"}`}>{data.title}</p>
                                </Link>
                            </div>
                           )
                        })
                    }
                </div>
                <div className='font-inter text-3xl text-richblack-5 font-medium'>My Course</div>
            </div>

            {/* button */}
            <button onClick={()=>{navigate("/dashboard/add-course")}} className='bg-yellow-50 flex gap-x-1 items-center px-4 py-1.5 rounded-md shadow-inner shadow-yellow-5 font-inter text-richblack-900 font-medium'>
                 <CiCirclePlus className=''/>
                 New
            </button>
        </div>

        {/*table */}
        <div>
            <CourseTable courses={courses} setCourses={setCourses}/>
        </div>
    </div>
  )
}

export default MyCourse