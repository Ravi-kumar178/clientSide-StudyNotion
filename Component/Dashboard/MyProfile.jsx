import React from 'react'
import { useSelector } from 'react-redux';
import { matchPath, useLocation, Link } from 'react-router-dom'
import { RiEditBoxLine } from "react-icons/ri";

const first = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Dashboard",
        link:"/dashboard/my-profile"
    },
    {
        name:"My Profile",
        link:"/dashboard/my-profile"
    }
]

function MyProfile() {

    
    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath({path:route},location.pathname)
    }

    const {user} = useSelector((state)=> state.profile);
    console.log("user: ",user);

  return (
    <div className='w-[1000px]'>
       <div className='w-full flex flex-col gap-y-8'>
            {/*Home/Dashboard/profile */}
            <div className='flex w-full gap-x-4 items-center '>
                {
                    first.map((data,index)=>{
                        return(
                            <div key={index} className={ `  ${matchRoute(data.link)?"text-yellow-50":" text-richblack-200"}
                             ${index < 2 && "border-r-[1px] border-richblack-400 "}
                            `}>
                                <Link to={data.link} className='pr-4'>{data.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
            {/*My Profile */}
            <div className=' text-richblack-5 text-3xl font-inter font-medium'>
                My Profile
            </div>
             
            <div className='pl-16 w-[80%] flex flex-col gap-y-4 font-inter'>
                    {/*Profile */}
                    <div className=' w-full bg-richblack-800  p-6 flex justify-between items-center
                                    rounded-md border-[1px] border-richblack-700'>
                        <div className='  flex gap-x-4 items-center'>
                            <div className='w-full'>
                                <img src={user?.image} alt='User'             className="aspect-square w-[78px] rounded-full object-cover"/>
                            </div>

                            <div className=' flex flex-col gap-y-1'>
                                <div className='font-inter text-richblack-5  text-lg font-semibold'>
                                    {user?.firstName}{" "}{user?.lastName}
                                </div>
                                <div className='font-inter text-richblack-200 font-normal text-sm'>
                                    {user?.email}
                                </div>
                            </div>
                        </div>

                        
                        <Link to={"/dashboard/settings"}>
                            <button className='px-5 py-2 shadow-inner bg-yellow-50 rounded-md'>
                                <div className='flex items-center gap-x-2 text-richblack-900  font-inter font-medium'>
                                    <RiEditBoxLine className='font-semibold'/>
                                    <p>Edit</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    {/*About */}
                    <div className=' w-full bg-richblack-800  p-6 flex justify-between items-center
                                    rounded-md border-[1px] border-richblack-700'>
                        <div className='flex flex-col gap-y-4'>
                            <p  className='font-inter text-richblack-5  text-lg font-semibold'>About</p>
                            <p className='font-inter text-richblack-200 font-normal text-sm'>
                                {
                                    user?.additionalDetails?.about ? (<span>{user?.additionalDetails?.about}</span>):(<span>Write something about yourself</span>)
                                }
                            </p>
                        </div>
                        
                        <Link to={"/dashboard/settings"}>
                            <button className='px-5 py-2 shadow-inner bg-yellow-50 rounded-md'>
                                <div className='flex items-center gap-x-2 text-richblack-900  font-inter font-medium'>
                                    <RiEditBoxLine className='font-semibold'/>
                                    <p>Edit</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    {/*Personal Details */}
                    <div className=' w-full bg-richblack-800  p-6 flex justify-between items-start
                                    rounded-md border-[1px] border-richblack-700'>
                        <div className='flex flex-col gap-y-6'>
                            <div className='font-inter text-richblack-5  text-lg font-semibold'>Personal Details</div>
                            <div className='flex gap-x-20 items-center'>
                              <div className='flex flex-col gap-y-4'>
                                <div className='flex flex-col gap-y-1'>
                                    <p  className='font-inter text-richblack-600 font-normal text-sm'>First Name</p>
                                    <p className='font-inter text-richblack-5 font-medium'>{user?.firstName}</p>
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <p className='font-inter text-richblack-600 font-normal text-sm'>Email</p>
                                    <p className='font-inter text-richblack-300 font-normal text-sm'>{user?.email}</p>
                                </div>
                              </div>

                              <div className='flex flex-col gap-y-4'>
                                <div className='flex flex-col gap-y-1'>
                                    <p  className='font-inter text-richblack-600 font-normal text-sm'>Last Name</p>
                                    <p className='font-inter text-richblack-5 font-medium'>{user?.lastName}</p>
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <p  className='font-inter text-richblack-600 font-normal text-sm'>Phone Number</p>
                                    <div>
                                        {
                                            user.additionalDetails.contactNumber ?
                                             (<p className='font-inter text-richblack-5 font-medium'>{user?.additionalDetails?.contactNumber}</p>)
                                             :
                                             (<p className='font-inter text-richblack-5 font-medium'>(+91) **********</p>)
                                            
                                        }
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <Link to={"/dashboard/settings"}>
                            <button className='px-5 py-2 shadow-inner bg-yellow-50 rounded-md'>
                                <div className='flex items-center gap-x-2 text-richblack-900  font-inter font-medium'>
                                    <RiEditBoxLine className='font-semibold'/>
                                    <p>Edit</p>
                                </div>
                            </button>
                        </Link>
                    </div>
            </div> 
       </div>
       
    </div>
  )
}

export default MyProfile