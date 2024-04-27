import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RxDropdownMenu } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux'
import { deleteSection, deleteSubSection } from '../../../../Services/Operations/CourseDetailsAPI';
import Modal from '../../Modal';
import { setCourse } from '../../../../Slices/CourseSlice';
import { BiSolidDownArrow } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import SubSectionModal from './SubSectionModal'


function NestedView({handleChangeEditSectionName}) {

    const {course} = useSelector((state)=>state.course);
    const {token} = useSelector((state)=>state.auth);

    const [addSubSection, setAddSubSection] = useState(null);
    const[editSubSection, setEditSubSection] = useState(null);
    const[viewSubSection , setViewSubSection] = useState(null);
    const [confirmationModal , setConfirmationModal] = useState(null);
    const dispatch = useDispatch();

    const handleDeleteSection = async(sectionId) => {
        const result = await deleteSection({
            sectionId,
            courseId: course._id
        },
         token
        )
        
        dispatch(setCourse(result));

        setConfirmationModal(null);
    }

    //sub section
    const handleDeleteSubSection = async(subSectionId,sectionId)=>{
        
        const result = await deleteSubSection(
            {
                subSectionId,
                sectionId,
                courseId : course._id,
            },
            token
        )
        console.log("result in nested view: ",result);
        dispatch(setCourse(result));
        setConfirmationModal(null);
    }

  return (
    <div className='w-full'>
       
        <div className='w-90% mx-auto bg-richblack-700 border border-richblack-600'>
            {
                course?.courseContent?.map((section)=>{
                    console.log("section in nested view: ", section);
                    return(
                        <details key={section._id} open>
                         <summary
                           className='flex justify-between items-center px-2 border-b border-b-richblack-200 pb-2'
                         >
                            <div className='flex items-center gap-x-3'>
                                <RxDropdownMenu/>
                                <p>{section.sectionName}</p>
                            </div>

                            <div className='flex items-center gap-x-3'>
                                <button
                                 onClick={()=>handleChangeEditSectionName(section.sectionName, section._id)}
                                >
                                    <MdEdit/>
                                </button>

                                <button
                                 onClick={()=>setConfirmationModal({
                                    text:"Delete the Section",
                                    description:"All the lecture in this section will be deleted",
                                    btn1Text:"Delete",
                                    btn2Text:"Cancel",
                                    btn1Handler:()=>{ handleDeleteSection(section._id) },
                                    btn2Handler:()=>{setConfirmationModal(null)}
                                  })}
                                  className='border-r border-r-richblack-100 pr-3'
                                >
                                  <RiDeleteBin6Line/>
                                </button>

                                <BiSolidDownArrow/>
                            </div>

                         </summary>

                         <div>
                            {
                                section.subSection.map((data)=>{
                                    console.log("subsection in nested view: ",data);
                                    return(
                                        <div key={data._id}
                                     onClick={()=>{setViewSubSection(data)}}
                                    className='flex justify-between items-center p-2 border-b border-b-richblack-400'>
                                        <div className='flex items-center gap-x-3'>
                                            <RxDropdownMenu/>
                                            <p>{data.title}</p>
                                        </div>

                                        <div
                                         onClick={(e)=>(e.stopPropagation())}
                                        className='flex items-center gap-x-3'>
                                            <button
                                             onClick={()=>setEditSubSection({...data,sectionId:section._id})}
                                            >
                                                <MdEdit/>
                                            </button>
                                            <button
                                             onClick={()=>setConfirmationModal({
                                                text:"Delete the sub-section",
                                                description:"selected lecture will be deleted",
                                                btn1Text:"Delete",
                                                btn2Text:"Cancel",
                                                btn1Handler:()=>{ handleDeleteSubSection(data._id,section._id) }, 
                                                btn2Handler:()=>{setConfirmationModal(null)}
                                              })}
                                            >
                                                <RiDeleteBin6Line/>
                                            </button>
                                        </div>
                                    </div>
                                    )
                                })
                            }

                            <button
                             onClick={()=>{setAddSubSection(section._id)}}
                            className=' text-yellow-50 flex items-center gap-x-1 m-3 font-inter font-medium'>
                                <AiOutlinePlus/>
                                Add Lecture
                            </button>
                         </div>

                        </details>
                    )
                })
            }
        </div>

        {addSubSection ?(<SubSectionModal
                          modalData ={addSubSection}
                          setModalData = {setAddSubSection}
                          add = {true}
                        />):
        (
            viewSubSection? (<SubSectionModal
                             modalData = {viewSubSection}
                             setModalData = {setViewSubSection}
                             view = {true}
                           />):
            (
                editSubSection? (<SubSectionModal
                                  modalData = {editSubSection}
                                  setModalData = {setEditSubSection}
                                  edit = {true}/>):
                                  (<div></div>)
            )               
        )
        }

       {confirmationModal && <Modal modalData = {confirmationModal}/>} 

    </div>
  )
}

export default NestedView