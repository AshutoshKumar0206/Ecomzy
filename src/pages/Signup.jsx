import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png' 

export default function Signup({setIsLoggedIn}) {
  return (
    <div>
      <Template
        title="Join the millions shopping for products"
        desc1="Experience a delightful shopping extravaganza"
        desc2="Let your shopping fantasies come to life."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}