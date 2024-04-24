import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { Link, matchPath, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaStar } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeFromCart } from '../../Slices/cartSlice';

function Wishlist() {

   /*  const{course} = useSelector((state)=>state.course);
    console.log("course: ",course); */
    const {cart, totalItem, totalPrice} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
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
            name:"Wishlist",
            link:"/dashboard/wishlist"
        }
    ]

    const location = useLocation();

    function matchRoute(route){
        return matchPath({path:route},location.pathname)
    }

  return (
    <div className='w-[1000px]'>
        <div className=' flex flex-col gap-y-8'> 
            <div className=' flex flex-col gap-y-4'>

                <div className='flex gap-x-4  items-center text-richblack-200'>
                    {
                        first.map((data,index)=>{
                            return(
                                <div 
                                 className={`${matchRoute(data.link)?"text-yellow-50":"text-richblack-200 border-r-[1px] "}
                                 ${index < 2 && "border-r-[1px] border-richblack-400 "} `}
                                key={index}>
                                    <Link to={data.link} className='pr-4'>
                                        {data.name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='font-inter text-3xl font-medium text-richblack-5'>My Wishlist</div>
            </div>

            {/* course cart */}
            <div className='flex flex-col gap-y-4'>
                <div className='text-richblack-200 font-inter font-semibold'>
                    <span className='text-richblack-5'>{totalItem}</span>{" "}Courses in Wishlist
                </div>

                {/* horizontal line */}
                <div className='h-[1px] w-full bg-richblack-400'></div>

                <div className='flex flex-row justify-between pr-10'>
                    <div>
                        {
                            totalItem > 0 ?
                            (
                            <div className='flex flex-col gap-y-4'>
                                {
                                    cart.map((course,index)=>{
                                        return(
                                            <div key={index} className='mt-4 flex flex-row gap-x-3 items-center border-b-[1px] border-richblack-400 pb-4'>
                                                {/*thumbnail */}
                                                <div>
                                                    <img src={course.thumbnail} alt='thumbnail'/>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <p className='text-richblack-5 font-inter text-lg font-medium'>{course.description}</p>
                                                    <p className='text-richblack-200 font-inter font-normal'>{course.category.name}</p>
                                                    <div className='flex items-center gap-x-1 '>
                                                        <p className='text-yellow-50  font-inter font-semibold'>4.5</p>
                                                        <ReactStars
                                                        count={5}
                                                        value={course.ratingAndReviews.length()}
                                                        size={20}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                        emptyIcon={<FaStar />}
                                                        fullIcon={<FaStar />}
                                                        />
                                                        <p className=' text-richblack-200  font-inter font-medium'>({course.ratingAndReviews.length()})</p>
                                                    </div>
                                                </div>

                                               {/*  third section */}
                                                <div className='flex flex-col gap-y-4'>
                                                    <button 
                                                     onClick={()=>{dispatch(removeFromCart(course._id))}}
                                                    className=' py-2 px-3 bg-richblack-800 border-[1px] border-richblack-700 text-[#EF476F] font-inter font-medium flex items-center gap-x-1'>
                                                        <RiDeleteBin5Line/>
                                                        <p>Remove</p>
                                                    </button>
                                                    <p>Rs.{course.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            )
                            :
                            (
                               /*  toast.error("No Course is present"), */
                            <div className='text-richblack-100 font-inter text-2xl dont-semibold'>
                                No Course is added to the wishlist
                            </div>
                            )
                        }
                    </div>
                        
                    <div className='w-[20%] bg-richblack-800 border-[1px] border-richblack-700 p-4 rounded-md
                                   flex flex-col gap-y-3'>
                        <p className=' text-richblack-5 font-semibold text-sm font-inter'>Total:</p>
                        <p className='font-inter text-2xl text-yellow-5 font-semibold'>Rs.{" "}{totalPrice}</p>
                        <button className=' bg-yellow-50 py-2 rounded-lg text-richblack-900 font-inter font-semibold shadow-inner border-[1px] border-yellow-5'>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wishlist