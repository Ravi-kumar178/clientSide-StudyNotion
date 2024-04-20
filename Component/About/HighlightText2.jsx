import React from 'react'

function HighlightText2({text}) {
    console.log(text);
    return (
      <span className='bg-gradient-to-r from-[#FF512F]  to-[#F09819] text-transparent bg-clip-text '>{" "}{text}{" "}</span>
    )
}

export default HighlightText2