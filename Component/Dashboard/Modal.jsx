import React from 'react'
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Modal({modalData}) {
  
  
  console.log(modalData);
  return (
    <div className=' fixed inset-0 z-[1000]  grid place-items-center bg-white bg-opacity-10 backdrop-blur-sm'>
       <div className='p-3 py-5 rounded-xl border-[1px] border-richblack-400 px-4 flex flex-col gap-y-3 min-w-[350px] bg-richblack-800 '>
        <div className='text-richblack-5 font-inter text-3xl font-semibold'>{modalData?.text}</div>
          <div className='text-richblack-100 font-inter text-lg '>{modalData?.description}</div>
          <div className='flex items-center gap-x-4 mt-3 mb-2'>
            <button
              onClick={modalData?.btn1Handler}
              className=''
            >
                 <div className='bg-yellow-50 outline-none p-2 rounded-md text-xl font-semibold px-4 font-inter  flex flex-row items-center gap-2'>
                  <p>{modalData?.btn1Text}</p>
                  <IoLogOut/>
                 </div>
            </button>

            <button onClick={modalData?.btn2Handler}
             className='bg-richblack-400 p-2 px-4 rounded-md text-xl font-inter font-semibold'
            >
                Cancel
            </button>
          </div>
       </div>
    </div>
  )
}

export default Modal