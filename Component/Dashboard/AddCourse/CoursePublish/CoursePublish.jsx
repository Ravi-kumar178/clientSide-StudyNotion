import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiChevronLeft } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { resetCourseState, setStep } from '../../../../Slices/CourseSlice';
import {COURSE_STATUS} from '../../../../utils/constants'
import { useNavigate } from 'react-router-dom';
import { editCourseDetails } from '../../../../Services/Operations/CourseDetailsAPI';
import toast from 'react-hot-toast';

function CoursePublish() {

    const {register,handleSubmit,getValues,setValue, formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const {course} = useSelector((state)=>state.course)
    const {token} = useSelector((state)=>state.auth);
    const[loading,setLoading] = useState(false);

    const handleCoursePublish = async() => {
        if(course?.status === COURSE_STATUS.PUBLISHED && getValues("public")===true
        ||
      course?.status === COURSE_STATUS.DRAFT && getValues("public")===false){
        dispatch(resetCourseState());
        navigate("/dashboard/my-courses");
      }
      console.log("Course in publish: ",course);
      const formData = new FormData();
      formData.append("courseId",course._id);
     
      const courseStatus = getValues("public")?COURSE_STATUS.PUBLISHED:COURSE_STATUS.DRAFT;
      console.log("courseStatus: ",courseStatus);
      formData.append("status",courseStatus);
      setLoading(true);
      const result = await editCourseDetails(formData,token);
      if(result){
        dispatch(resetCourseState());
        navigate("/dashboard/my-courses");
      }
      setLoading(false);
    }


    function goToBack(){
        dispatch(setStep(2));
    }

    function onSubmitHandler(){
        handleCoursePublish();
    }


    useEffect(()=>{
       if(course?.status === COURSE_STATUS.PUBLISHED){
        setValue("public",true);
       }
    },[])

    
    function saveAsDraft(){
        toast.success("save as Draft");
        dispatch(resetCourseState());
        navigate("dashboard/my-courses");
    }

  return (
    <div className='w-full mt-10 bg-richblack-800 border-[1px] border-richblack-700 rounded-md
    p-4 '>
        <div>
            <p className='text-richblack-25 font-inter text-2xl font-semibold'>Publish Settings</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitHandler)} className='mt-5 ml-2 flex flex-col gap-y-8'>
            <div>
                <label>
                    <input
                    type='checkbox'
                    id='public'
                    {...register("public")}
                    className='border-gray-300 h-4 w-4 font-inter accent-richblack-700'
                    />
                    <span className='ml-2 font-medium font-inter text-richblack-500'>Make this course public</span>
                </label>
            </div>
            <div className='flex justify-between items-center'>
                <button onClick={goToBack} className='rounded-md px-3 py-1 text-richblack-5 flex items-center gap-x-1 bg-richblack-700 border-r-2 border-b-2 border-r-richblack-600 border-b-richblack-600'>
                    <BiChevronLeft className='-mb-0.5'/>
                    Back
                </button>
                <div className='flex items-center gap-x-3'>
                  <button onClick={saveAsDraft} className='rounded-md px-3 py-1 text-richblack-5 flex items-center gap-x-1 bg-richblack-700 border-r-2 border-b-2 border-r-richblack-600 border-b-richblack-600'>
                     Save as Draft
                  </button>
                  <button type='submit' className='rounded-md px-3 py-1 text-richblack-900 flex items-center gap-x-1 bg-yellow-50 '>
                     Save and Publish
                  </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CoursePublish