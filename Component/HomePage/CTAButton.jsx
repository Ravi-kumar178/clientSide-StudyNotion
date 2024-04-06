import React from 'react'
import { Link } from 'react-router-dom'

function CTAButton({link,text,active}) {
  return (
    <Link to={link} >
        <div className={`py-2 px-4 border-b border-r font-inter font-medium hover:scale-95 transition-all duration-200  rounded-md ${active?" bg-yellow-50 text-richblack-900":" bg-richblack-700 text-richblack-5"} `}>
            {text}
        </div>
    </Link>
  )
}

export default CTAButton