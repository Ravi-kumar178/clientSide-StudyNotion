import React from 'react'
import * as Icons from 'react-icons/vsc'
import { Link, matchPath, useLocation } from 'react-router-dom';

function SidebarLink({data, icon}) {
  const Icon = Icons[icon];
  const location = useLocation(); 
  

  const matchRoute= (route)=>{
     return matchPath({path:route},location.pathname);
  }

  return (
    <div className={`p-2 relative ${matchRoute(data.path)?("bg-[#3D2A01] text-[#FFD60A]"):("bg-richblack-800 text-richblack-100")}`}>
        <Link to={data.path}
         
        >
        <span className={`w-[2px] h-full bg-[#FFD60A] absolute left-0 ${matchRoute(data.path)?(" visible block"):(" hidden")}`}></span>
        <div className='ml-4 flex gap-x-2 items-center'>
            {Icon && <Icon/>}
            <span>{data.name}</span>
        </div>
        </Link>
    </div>
  )
}

export default SidebarLink