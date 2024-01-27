import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

export default function Login({ setIsLoggedIn }) {
  return (
    <div>

      <Template
        title="Welcome to Ecomzy"
        desc1="Experience a delightful shopping extravaganza"
        desc2="Let your shopping fantasies come to life."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />

    </div>
  )
}