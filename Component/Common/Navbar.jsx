import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from '../Core/ProfileDropDown'
import { apiConnector } from '../../Services/apiConnector'
import { categories } from '../../Services/api'
import { IoIosArrowDown } from "react-icons/io";

const subLink = [
    {
        title:"Python",
        link:"/catalog/python"
    },
    {
        title:"Web Devlopment",
        link:"/catalog/webdevlopment"
    }
];

function Navbar() {

    //call to db for categories fetching
    /* const[subLink, setSubLink] = useState([]);
    const fetchSubLink = async()=>{
        try{
            const result = await apiConnector("GET",categories.CATEGORIES_API);
            console.log(result);
            setSubLink(result.data.data);
        }
        catch(err){
            console.log("Could not fetch the categories list")
        }
    }

    useEffect(()=>{
        fetchSubLink();
    },[]); */


    //import from redux store
    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=> state.profile);
    const {totalItem} = useSelector((state)=> state.cart);

    const location = useLocation();
    function matchRoute(route){
        return matchPath({path:route},location.pathname);
    }
  return (
    <div className='px-2 border-b-[1px] border-b-richblack-700 h-14 flex justify-center items-center font-inter'>
        <div className='w-11/12 max-w-maxContent flex flex-row justify-between items-center'>
            <Link to={"/"}>
                <img src={logo} alt='logo' loading='lazy'/>
            </Link>

            <nav>
                <ul className='flex flex-row items-center gap-4'>
                    
                        {
                            NavbarLinks.map((links,index)=>{
                                return(
                                  <li key={index} className='font-normal text-richblack-5'>
                                     {links.title === "Catalog"?(
                                        <div className='relative group flex items-center gap-1 cursor-pointer  '>
                                            <p>{links?.title}</p>
                                             <IoIosArrowDown/>

                                             <div className=' invisible absolute top-[50%] left-[50%] translate-y-[30%]
                                              translate-x-[-50%] flex flex-col items-center bg-richblack-5 text-richblack-900 gap-2 w-[200px]
                                              rounded-md group-hover:visible transition-all duration-200 py-2 '>
                                                 <div className='absolute top-[-15%] right-[30%] h-6 w-6 bg-richblack-5
                                                  rotate-45 rounded-md'>
                                                 </div>   
                                                       { subLink.length > 0 && (
                                                            subLink.map((sublink,index)=>{
                                                                return(
                                                                    <Link to={sublink.link} key={index} className=''>
                                                                       <p className=''>{sublink.title}</p> 
                                                                    </Link>
                                                                )
                                                            })
                                                        )
                                                    }
                                                
                                            </div>
                                        </div>
                                     ):
                                     (
                                        <Link to={links?.path}>
                                            <p className={`${matchRoute(links?.path)?"text-yellow-25":"text-richblack-5"}`}>{links?.title}</p>
                                        </Link>
                                     )
                                     }
                                  </li>
                                )
                            })
                        }
                    
                </ul>
            </nav>

            {/* login/signup/dashboard */}
            <div className='flex items-center gap-x-6'>
                {
                    user && user?.accountType != "Instructor" &&(
                        <Link to={"/dashboard/cart"} className='relative'>
                            <AiOutlineShoppingCart/>
                            {
                                totalItem>0 && (
                                    <span className='absolute -top-2 right-1'>{totalItem}</span>
                                )
                            }
                        </Link>
                    )

                }
                {
                    token === null && (
                       <Link to={"/login"}>
                           <button className='text-richblack-5 bg-richblack-800  px-4 py-1 border-[1px] border-richblack-400 rounded-md hover:bg-richblack-5 hover:text-richblack-800 transition-all duration-200'>Log in</button>
                       </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/signup"}>
                            <button  className='text-richblack-5 bg-richblack-800  px-4 py-1 border-[1px] border-richblack-400 rounded-md hover:bg-richblack-5 hover:text-richblack-800 transition-all duration-200'>Sign in</button>
                        </Link>
                    )
                }

                {
                    token !== null && (<ProfileDropDown/>)
                }

            </div>
        </div>

    </div>
  )
}

export default Navbar