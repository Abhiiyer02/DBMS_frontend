import React, { useContext } from 'react'
import './login.css'
import AuthContext from '../context/AuthContext'

function Login(props) {
  let {login} = useContext(AuthContext)
  return (
  <div className='login-card'>
    <div className="container">
      <div className="top-part">
        <h1>{props.heading}</h1>
        <h3>{props.subHeading}</h3>
      </div>
      <hr className="solid"/>
      <div className="login-form">
        <form onSubmit={(e) => login(e)}>
          <label htmlFor="email"><b>Email</b></label>
          <input type="email" id="email" name="email" placeholder="example@gmail.com" required></input>

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" id="password" name="password" placeholder="********" required></input>
          <button type="submit"className='btn-login'>Login</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login