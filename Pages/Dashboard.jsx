import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/Dashboard/Sidebar'
import Footer from '../Component/Common/Footer'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from '../utils/constants'


function Dashboard() {
  const{user} =useSelector((state)=>state.profile);
  console.log(user);
  return (
    <div>
      <div className='relative flex flex-row gap-x-4 '>
      <div className='min-h-screen'>
        <Sidebar/>
      </div>
        <div className='h-[calc(100vh-3.5rem)]'>
           <div className='w-11/12 max-w-[1000px] py-10 mx-auto'>
             <Outlet/>
           </div>
        </div>
     </div>
      {user.accountType === ACCOUNT_TYPE.STUDENT && <Footer/>}
    </div>
  )
}

export default Dashboard