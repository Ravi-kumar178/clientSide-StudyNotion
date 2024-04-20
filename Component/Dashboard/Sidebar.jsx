import React, { useState } from 'react'
import { sidebarLinks } from '../../data/dashboard-links'
import { useDispatch, useSelector } from 'react-redux';
import SidebarLink from './SidebarLink';
import { useNavigate } from 'react-router-dom';

import { IoLogOut } from "react-icons/io5";
import Modal from './Modal';
import { logout } from '../../Services/Operations/auth';


function Sidebar() {
    console.log("sidebarLinks: ", sidebarLinks);
    const { loading:authLoading} = useSelector((state) => state.auth);
    const{user, loading: profileLoading} = useSelector((state)=>state.profile);

    const dispatch = useDispatch();
    const [confirmationModal, setConfirmationModal] = useState(null);
    const navigate = useNavigate();


    if(authLoading || profileLoading){
        
        return(
          <div>
            <div className='spinner mt-20'></div>
          </div>
        )
    }

    console.log("logout: ",logout);
    
  return (
    <div className='pt-4 bg-richblack-800 flex flex-col h-[calc(100vh+10rem)] w-[222px]'>
        {
            sidebarLinks.map((data,index)=>{
                if(data.type && user?.accountType !== data.type){
                    return null;
                }

              
                return(
                    <div key={index}>
                        
                      <div className=''>
                          <SidebarLink data={data} icon={data.icon}/>
                      </div>

                     
                    </div>
                )
            })
        }
          
         <div className='w-[80%] mx-auto my-6 h-[0.5px] bg-richblack-100'></div>
        <div>
          <SidebarLink data={{name:"Settings",path:"/dashboard/settings"}} icon={"VscSettingsGear"}/>
       </div>

       <button
        onClick={()=>setConfirmationModal({
          text:"Are you sure?",
          description:"You will be logged out of your Account",
          btn1Text:"Logout",
          btn2Text:"Cancel",
          btn1Handler:()=>{ dispatch(logout(navigate)) },
          btn2Handler:()=>{setConfirmationModal(null)}
        })}
        className='mt-2 w-[80%] mx-auto'
       >
        <div className=' flex items-center gap-x-2 text-richblack-100'>
          <IoLogOut/>
          <p>Log out</p>
        </div>
       </button>

       
        {confirmationModal && <Modal modalData={confirmationModal}/>}
       

    </div>
  )
}

export default Sidebar