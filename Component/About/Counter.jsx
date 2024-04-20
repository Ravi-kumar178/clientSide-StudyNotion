import React from 'react'
import CountUp from 'react-countup'

function Counter({end,desc}) {
  return (
    <div>
         <div className='text-white flex flex-col items-center gap-y-2'>
            <div className='text-richblack-5 font-bold text-3xl font-inter'>
                <CountUp
                end={end}
                duration={5}
                />
                <span>+</span>
            </div>
            <div className='font-inter font-semibold'>{desc}</div>
         </div>
    </div>
  )
}

export default Counter