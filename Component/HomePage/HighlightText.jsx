import React from 'react'

function HighlightText({text}) {
    console.log(text);
  return (
    <span className='bg-gradient-to-r from-[#1FA2FF] to-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text '>{" "}{text}{" "}</span>
  )
}

export default HighlightText