import React from 'react'
import Template from './Template'
import loginImg from '../../assets/Images/login.webp'

function Login({setIsLoggedIn}) {
  return (
    <div>
        <Template
         title = "Welcome Back"
         desc1 = "Build skills for today, tomorrow, and beyond."
         desc2 = " Education to future-proof your career."
         formType = "login"
         image = {loginImg}
         />
    </div>
  )
}

export default Login