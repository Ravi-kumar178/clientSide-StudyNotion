import React from 'react'
import Template from './Template'
import signupImage from "../../assets/Images/signup.webp"
function Signup() {
  return (
    <div>
        <Template
         title = "Join the millions learning to code with StudyNotion for free"
         desc1 = "Build skills for today, tomorrow, and beyond."
         desc2 = " Education to future-proof your career."
         formType = "signup"
         image = {signupImage}        
         />
    </div>
  )
}

export default Signup