import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Upload from './Upload'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { createSubSection, updateSubSection } from '../../../../Services/Operations/CourseDetailsAPI';
import { setCourse } from '../../../../Slices/CourseSlice';
import { RxCross2 } from 'react-icons/rx';

function SubSectionModal({modalData,setModalData,view=false,add=false,edit=false}) {

  const{register, handleSubmit, setValue, getValues, formState:{errors}} = useForm();

  const[loading,setLoading] = useState(null);
  const {course} = useSelector((state)=>state.course);
  const{token} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(view || edit){
      setValue("lectureTitle",modalData.title);
      setValue("lectureDescription",modalData.description);
      setValue("lectureVideo",modalData.videoUrl);
    }
  },[]);

  const currentValue = getValues();
  useEffect(()=>{
    
    console.log(currentValue.lectureVideo);
  },[currentValue.lectureVideo])

  const isFormUpdated = () => {
    const currentValue = getValues();

    if(currentValue.lectureTitle !== modalData.title ||
       currentValue.lectureDescription !== modalData.description ||
       currentValue.lectureVideo !== modalData.videoUrl
    ){
      return true;
    }
    else{
      return false;
    }
  }

 async function onSubmitHandler(data){
  
    if(view){
      return;
    }
    else if(edit){
      if(!isFormUpdated){
        toast.error("No changes made to the form");
      }
      else{
        const currentValue = getValues();
        const formData = new FormData();
        formData.append("courseId", course._id);
        formData.append("sectionId",modalData.sectionId);
        formData.append("subSectionId",modalData._id);
        if(currentValue.lectureTitle !== modalData.title){
          formData.append("title",currentValue.lectureTitle);
        }
        if(currentValue.lectureDescription !== modalData.description){
          formData.append("description",currentValue.lectureDescription);
        }
        if(currentValue.lectureVideo !== modalData.videoUrl){
          formData.append("video", currentValue.lectureVideo);
        }

        setLoading(true);
        const result = await updateSubSection(formData,token);
        console.log("result while updating sub section: ",result);
        if(result){
          dispatch(setCourse(result));
        }
        setLoading(false);
        setModalData(null);
        
      }
    }
    else{
      //add lecture
      
      const formData = new FormData();
      formData.append("courseId",course._id);
      formData.append("sectionId",modalData);
      formData.append("title",data.lectureTitle);
      formData.append("description",data.lectureDescription);
      formData.append("video",data.lectureVideo);

      console.log("data ka video", data.lectureVideo);
      
      setLoading(true);
      const result = await createSubSection(formData,token);
      dispatch(setCourse(result));
      setModalData(null);
      setLoading(false);
    }
  }

  console.log("course in subsection",course);
  return (
    <div  className="fixed rounded-lg inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
     <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-700  bg-richblack-800">
        <div className='py-3 px-4 bg-richblack-700 border border-richblack-600 flex flex-row justify-between items-center font-inter text-lg text-richblack-25'>
          <p>
            {view && "Viewing"}
            {edit && "Editing"}
            {add && "Adding"}
          </p>

          <button onClick={()=>{setModalData(null)}}>
            <RxCross2/>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)} className='p-8 flex flex-col gap-y-6'>
            <Upload
            name="lectureVideo"
            label = "Lecture Video"
            register={register}
            setValue={setValue}
            errors={errors}
            video = {true}
            viewData = {view?modalData.videoUrl:null}
            editData = {edit? modalData.videoUrl:null}
            />

            <div className='flex flex-col gap-y-1'>
              <label  className='text-richblack-25 font-inter text-sm'>Lecture Title<sup className='text-pink-200'>*</sup></label>
              <input 
              type='text'
              id='lectureTitle'
              name='lectureTitle'
              placeholder='Enter Lecture Title'
              {...register("lectureTitle",{required:true})}
              className='pl-3 py-2 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
              />
              {
                errors.lectureTitle && (<span>
                  Enter the Lecture Title
                </span>)
              }
            </div>

            <div className='flex flex-col gap-y-1'>
              <label  className='text-richblack-25 font-inter text-sm'>Lecture description<sup className=' text-pink-200'>*</sup></label>
              <textarea
              id='lectureDescription'
              name='lectureDescription'
              placeholder='Enter Lecture Description'
              {...register("lectureDescription",{required:true})}
              className='pl-3 py-2 min-h-12 text-richblack-100 font-inter font-medium border-b-[1px] border-b-richblack-400 bg-richblack-700 shadow-inner rounded-md'
              />
              {
                errors.lectureDescription && (
                  <span>Lecture Description is required</span>
                )
              }
            </div>

              <div className='flex items-center justify-end mr-5 gap-x-3'>
                <button
                onClick={()=>{setModalData(null)}}
                className='font-inter  bg-richblack-700 py-1 px-3 text-richblack-5 border-r border-b border-r-richblack-400 border-b-richblack-400 rounded-md'>Cancel</button>

                {
                  !view && (
                    <button
                    className='py-1 px-3 bg-yellow-50 rounded-md font-inter font-medium text-richblack-900'
                    >{!add?("Save Changes"):("Save")}</button>
                  )
                }
              </div>
        </form>
      </div> 
    </div>
  )
}

export default SubSectionModal