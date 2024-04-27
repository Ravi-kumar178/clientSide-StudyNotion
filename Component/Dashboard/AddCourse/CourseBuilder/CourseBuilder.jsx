import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdChevronLeft, MdChevronRight, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import NestedView from './NestedView';
import { setCourse, setStep } from '../../../../Slices/CourseSlice';
import toast from 'react-hot-toast';
import { createSection, updateSection } from '../../../../Services/Operations/CourseDetailsAPI';



function CourseBuilder() {

    const {register,handleSubmit, formState:{errors}, setValue} = useForm();
    const [editSection , setEditSection] = useState(null);
    const {course} = useSelector((state)=>state.course);
    const {editCourse} = useSelector((state)=>state.course);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const {token} = useSelector((state)=>state.auth);

    function cancelEdit(){
        setEditSection(null);
        setValue("sectionName","");
    }

    function goToBack(){
        dispatch(setStep(1));
        dispatch(editCourse(true));
    }

    function goToNext(){
        if(course.courseContent.length === 0){
            toast.error("Add atleast one section");
            return;
        }
        if(course.courseContent.some((section)=>(section.subSection.length === 0))){
            toast.error("Add atleast one sub-section");
            return;
        }
        //go to next 
        dispatch(setStep(3));
    }

    useEffect(()=>{
        console.log("courseBuilder course: ",course);
    },[course]);

    const onSubmitHandler = async(data) => {
        setLoading(true);
        let result;
        
        if(editSection){
            result = await updateSection({
                sectionName :data.sectionName,
                sectionId : editSection,
                courseId : course._id
                },token);
        }
        else{
            result = await createSection(
                {
                    sectionName : data.sectionName,
                    courseId: course._id
                },token
            )
        }
        setLoading(false);
        console.log("result in courseBuilder: ",result);

        if(result){
             dispatch(setCourse(result));
             setEditSection(null);
             setValue("sectionName","");
        }
        
        //react state updation is asynchronous
        console.log("courses in courseBuilder: ",course);   
    }

    const handleChangeEditSectionName = (sectionName,sectionId) =>{
        if(editSection === sectionId){
            cancelEdit();
            return;
        }
        setValue("sectionName",sectionName);
        setEditSection(sectionId);
    }

  return (
    <div className='mt-10 w-full'>

        <div className='bg-richblack-800 border-[1px] rounded-md
                        flex flex-col gap-y-3 border-richblack-700 p-4 w-full'>
            
            <form
             className='flex flex-col gap-y-4 '
             onSubmit={handleSubmit(onSubmitHandler)}>
                <div className='flex flex-col gap-y-4'>
                <label 
                 className='text-richblack-25 font-inter text-sm'
                 htmlFor='sectionName'>Course Builder<sup className='text-pink-200'>*</sup></label>
                    <input
                     type='text'
                     id='sectionName'
                     name='sectionName'
                     {...register("sectionName",{required:true})}
                     placeholder='Add a section to build your course'
                     className='pl-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                    />
                    {
                        errors.sectionName && (
                            <span className='text-sm text-richblack-300'>Section name is required</span>
                        )
                    }
                </div>

                <div className='flex items-center gap-x-4'>
                    <button
                     type='submit'
                    className='flex items-center gap-x-1 px-3 py-1  text-yellow-50 bg-richblack-800 border border-yellow-25 rounded-md'>
                        {!editSection ? "Create Section":"Edit Section"}
                        {!editSection ? (<IoMdAddCircleOutline/>):(<MdEdit/>)}
                    </button>

                    {editSection && (
                        <button
                         onClick={cancelEdit}
                        className='flex items-center gap-x-1 px-3 py-1  text-richblack-5 bg-richblack-800 border border-richblack-700 rounded-md'>Cancel</button>
                    )}
                </div>
            </form>

            {
                course.courseContent.length > 0 && 
                (<NestedView handleChangeEditSectionName = {handleChangeEditSectionName}/>)
            }

        </div>

        <div className='flex mr-5 mt-5 justify-end items-center gap-x-4'>
            <button 
             onClick={goToBack}
            className='flex font-medium font-inter items-center gap-x-1 bg-richblack-800 border-r border-b border-r-richblack-700 border-b-richblack-700 px-3 py-1 rounded-md text-richblack-5'>
                <MdChevronLeft className='-mb-0.5'/>
                Back
            </button>

            <button
             onClick={goToNext}
            className='flex items-center gap-x-1 font-inter bg-yellow-50 rounded-md px-3 py-1'>
                Next
                <MdChevronRight className='-mb-0.5'/>
            </button>
        </div>


    </div>
  )
}

export default CourseBuilder