import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Component/Dashboard/Sidebar'
import Footer from '../Component/Common/Footer'

function Dashboard() {
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
      <Footer/>
    </div>
  )
}

export default Dashboard