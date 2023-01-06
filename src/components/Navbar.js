import React, { useContext } from 'react'
import './navbar.css'
import AuthContext from '../context/AuthContext'

function Navbar(props) {
  const {logout} = useContext(AuthContext)
  return (
    <div className='main-bar'>
        <div className='left'>
            <img src={props.img} alt='logo'/>
            <p>{props.heading}</p>
        </div>
        <div className='right'>
            <ul className='nav-links'>
                <li><a href='#'>Request</a></li>
                <li><a href='#'>Status</a></li>
                <li><button type='button' onClick={logout}>Logout</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar