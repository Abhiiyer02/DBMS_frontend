import React, { useState,useEffect } from 'react'
import {useContext} from 'react'
import RequestForm from '../../components/RequestForm'
import AuthContext from '../../context/AuthContext'
import './request.css'

function Request() {
  const {user} = useContext(AuthContext)
  const {authTokens} = useContext(AuthContext)
  const [data, setData] = useState([])
  
  useEffect(() =>{
    async function fetchData(){
      const response = await fetch(`http://localhost:8000/hospital/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authentication': `Bearer ${authTokens.access_token}`  
      }})
      if(response.status === 200){
        const data = await response.json()
        setData(data)
      }
      else
        console.log("Error " + response.status + " : " + response.statusText)
    }
    fetchData()
  }, [user.id, authTokens.access_token])

    return (
    <div>
        <h1 className = 'heading'>Hello {data.name} #{data.hospital_id}</h1>

        <RequestForm
          heading = "Request Details"
        />
    </div>
  )
}

export default Request