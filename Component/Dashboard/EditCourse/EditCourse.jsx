import React, { useEffect, useState } from 'react'
import RenderSteps from '../AddCourse/RenderSteps'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getFullDetailsOfCourse } from '../../../Services/Operations/CourseDetailsAPI';
import { setCourse, setEditCourse } from '../../../Slices/CourseSlice';

function EditCourse() {

    const {courseId} = useParams();
    const {course} = useSelector((state)=>state.course);
    const {token} = useSelector((state)=>state.auth);
    const[loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    console.log(courseId);

    useEffect(()=>{
        const populateCourseDetails = async()=>{
            setLoading(true);
            const result = await getFullDetailsOfCourse(courseId,token);
            console.log("result: ",result);
            if(result){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result?.courseDetails));
            }
            setLoading(false);
        }
        populateCourseDetails();
    },[])

    console.log("course: ",course);

  return (
    <div className='w-[1000px]'>
        <p className='text-richblack-5 text-3xl font-medium font-inter'>Edit Course</p>

        <div>
            <RenderSteps/>
        </div>
    </div>
  )
}

export default EditCourse