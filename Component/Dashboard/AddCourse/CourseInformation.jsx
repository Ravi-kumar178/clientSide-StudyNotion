import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { categories } from '../../../Services/api';
import { apiConnector } from '../../../Services/apiConnector';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCurrencyRupee } from 'react-icons/hi2';
import ChipInput from './ChipInput';
import Upload from './Upload';
import Requirement from './Requirement';
import { setCourse, setEditCourse, setStep } from '../../../Slices/CourseSlice';

import { addCourseDetails, editCourseDetails } from '../../../Services/Operations/CourseDetailsAPI';
import toast from 'react-hot-toast';
import {RiArrowDropRightLine} from "react-icons/ri"

function CourseInformation() {

    const dispatch = useDispatch();
    const[loading,setLoading] = useState(false);

    const{
        register,
        handleSubmit,
        formState: {errors},
        getValues,
        setValue
    } = useForm();

    const [category,setCategory] = useState([]);

    async function getAllCategories(){
        try{
            const result = await apiConnector("GET",categories.CATEGORIES_API);
            /* console.log(result); */
            setCategory(result.data.data);
        }
        catch(err){
            console.log("error message while fetching categories: ",err.message);
        }
    }
  /*  console.log(category);  */

    const {course, editCourse} = useSelector((state)=>state.course);

    useEffect(()=>{
        getAllCategories();

        if(editCourse){
            setValue("courseTitle",course.courseName);
            setValue("courseShortDesc",course.courseDescription);
            setValue("price",course.price);
            setValue("courseCategory",course.category);
            setValue("courseTag",course.tag);
            setValue("courseBenefits",course.whatYouWillLearn);
            setValue("courseImage",course.thumbnail);
            setValue("courseInstruction",course.instructions);
        }
        
    },[]);

    function isFormUpdated(){
        const currentValues = getValues();
        if(currentValues.courseTitle !== course.courseName ||
           currentValues.courseShortDesc !== course.courseDescription||
           currentValues.price !== course.price ||
           currentValues.courseCategory._id !== course.category._id||
           currentValues.courseTag.toString() !== course.tag.toString() ||
           currentValues.courseBenefits !== course.whatYouWillLearn ||
           currentValues.courseImage !== course.thumbnail ||
           currentValues.courseInstruction.toString() !== course.instructions.toString()
        ){
            return true;
        }
        else{
            return false;
        }
    }
    const{token } = useSelector((state)=>state.auth);
    async function onSubmitHandler(data){
       /*  console.log(data); */
        if(editCourse){
            if(isFormUpdated){
                const currentValues = getValues();
                const formData = new FormData();

                formData.append("courseId",course._id);

                if(currentValues.courseTitle !== course.courseName){
                    formData.append("courseName",data.courseTitle);
                }
                if(currentValues.courseShortDesc !== course.courseDescription){
                    formData.append("courseDescription",data.courseShortDesc);
                }
                if(currentValues.price !== course.price){
                    formData.append("price",data.price);
                }
                if(currentValues.category._id !== course.category._id){
                    formData.append("category",data.courseCategory);
                }
                if(currentValues.courseTag.toString() !== course.tag.toString()){
                    formData.append("tag",JSON.stringify(data.courseTag))
                }
                if(currentValues.courseImage !== course.thumbnail){
                    formData.append("thumbnail",data.courseImage);
                }
                if(currentValues.courseBenefits !== course.whatYouWillLearn){
                    formData.append("whatYouWillLearn",data.courseBenefits)
                }
                if(currentValues.courseInstruction.toString() !== course.instructions.toString()){
                    formData.append("instructions",JSON.stringify(data.courseInstruction));
                }

                setLoading(true);
                const result = await editCourseDetails(formData,token);
                setLoading(false);
                if(result){
                    dispatch(setEditCourse(false));
                    dispatch(setStep(2));
                    dispatch(setCourse(result));
                }
            }
            else{
                toast.error("Course Updation Failed")
            }
            return;
        }
        console.log(JSON.stringify(data.courseInstruction));
        //create a new course
        const formData = new FormData();
        formData.append("courseName",data.courseTitle);
        formData.append("courseDescription",data.courseShortDesc);
        formData.append("price",data.price);
        formData.append("category",data.courseCategory);
        formData.append("tag",JSON.stringify(data.courseTag))
        formData.append("thumbnail",data.courseImage);
        formData.append("whatYouWillLearn",data.courseBenefits)
        formData.append("instructions",JSON.stringify(data.courseInstruction));

       /*  console.log(data); */

        setLoading(true);
        const result = await addCourseDetails(formData,token);

        setLoading(false);
        if(result){
            dispatch(setStep(2));
            dispatch(setCourse(result));
        }
        /* console.log("result: ", result); */
    }

  return (
    <div className='w-full mt-10 bg-richblack-800 border-[1px] border-richblack-700 rounded-md
                  p-4'>
        <form
         onSubmit={handleSubmit(onSubmitHandler)}
         className='flex flex-col gap-y-6'
        >
            <div className='flex flex-col gap-y-1'>
                <label 
                 className='text-richblack-25 font-inter text-sm'
                htmlFor='courseTitle'>Course Title<sup className='text-pink-200'>*</sup></label>
                <input
                 type='text'
                 name='courseTitle'
                 id='courseTitle'
                 placeholder='Enter Course Title'
                 {...register("courseTitle",{required:true})}
                 className='pl-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                />
                {
                    errors.courseTitle && (
                        <span className='text-sm text-richblack-300'>Course Title is required</span>
                    )
                }
            </div>

            <div className='flex flex-col gap-y-1'>
                <label htmlFor='courseShortDesc' className='text-richblack-25 font-inter text-sm'>Course Short Description<sup className='text-sm text-pink-200'>*</sup></label>
                <textarea
                 name='courseShortDesc'
                 id='courseShortDesc'
                 placeholder='Enter Description'
                 className='pl-3  min-h-[130px] py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                 {...register("courseShortDesc",{required:true})}
                />
                {
                    errors.courseShortDesc && (
                        <span className='text-sm text-richblack-300'>Course Short Description is required</span>
                    )
                }
            </div>

            <div className='flex flex-col gap-y-1 relative'>
                <label htmlFor='price' className='text-richblack-25 font-inter text-sm'>Price<sup className=' text-pink-200 text-sm'>*</sup></label>
                <input
                 type='number'
                 name='price'
                 id='price'
                 placeholder='Enter Price'
                 className='pl-10 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                 {
                    ...register("price",{required:true})
                 }
                />
                <HiOutlineCurrencyRupee size={20} className='text-richblack-400 absolute top-1/2 left-2'/>
                {
                    errors.price && (
                        <span className='text-sm text-richblack-300'>Price is required</span>
                    )
                }
            </div>

            <div className='flex flex-col gap-y-1'>
              <label htmlFor='courseCategory' className='text-richblack-25 font-inter text-sm'>Category<sup className=' text-pink-200 text-sm'>*</sup></label>
              <select
               name='courseCategory'
               id='courseCategory'
               defaultValue={" "}
               {...register("courseCategory",{required:true})}
               className='pl-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
              >
                <option value=" "disabled>Choose a category</option> 
                {
                    category.map((data,index)=>{
                        return(
                            <option value={data._id} key={index}>{data.name}</option>
                        )
                    })
                }
              </select>
            </div>

            <ChipInput
             label="Tags"
             name="courseTag"
             placeholder="Choose a Tag"
             register={register}
             errors={errors}
             setValue={setValue}
             getValues = {getValues}
             
            />

           <Upload
            name={"courseImage"}
            label = "Course Thumbnail"
            register={register}
            errors={errors}
            setValue={setValue}
            />

            <div className='flex flex-col gap-y-1'>
                <label className='text-richblack-25 font-inter text-sm' htmlFor='courseBenefits'>Benefits of the course<sup className='text-pink-200'>*</sup></label>

                <textarea
                 name='courseBenefits'
                 id='courseBenefits'
                 placeholder='Enter Benefits of the Course'
                 className='pl-3  min-h-[130px] py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
                 {...register("courseBenefits",{required:true})}
                />
                {
                    errors.courseBenefits && (
                        <span className='text-sm text-richblack-300'>Enter Course Benefits</span>
                    )
                }
            </div>

            <Requirement
             label = "Requirements/Instructions"
             name = "courseInstruction"
             placeholder = 'Enter the Requirements'
             register = {register}
             getValues = {getValues}
             setValue = {setValue}
            />

            <div className='flex justify-end items-center gap-x-3 mr-3'>
                {
                    editCourse && (
                        <button
                         onClick={()=>{dispatch(setStep(2))}}
                        >
                            Continue without saving
                        </button>
                    )
                }

                 <button type='submit' className='bg-yellow-50 flex items-center gap-x-1 py-2 px-4 rounded-md text-richblue-900'>
                    {
                        editCourse?("Save Changes"):("Next")
                    }
                    <RiArrowDropRightLine size={24} className='-mb-0.5'/>
                 </button>
                
            </div>
        </form>
    </div>
  )
}

export default CourseInformation