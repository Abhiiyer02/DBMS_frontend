import React from 'react'
import './loginPage.css'
import bg_img from '../../assets/images/blood_donation_bg.png'
import Login from '../../components/Login'

function LoginPage() {
  return (
    <div className='login-main'>
      <div className='login-left'>
        <img src={bg_img} alt = 'donate blood'></img>
      </div>
      <div className="login-right">
        <Login heading = "Blood Bank" subHeading = "Blood Bank Login"/>
      </div>
    </div>
  )
}

export default LoginPage