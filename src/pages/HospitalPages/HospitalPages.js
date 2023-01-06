import React from 'react'
import Navbar from '../../components/Navbar'
import Request from './Request'
import './hospitalPages.css'

function HospitalPages() {
  return (
    <div className='main'>
      <Navbar
        heading='Blood Bank'
      />
      <Request/>
    </div>
  )
}

export default HospitalPages