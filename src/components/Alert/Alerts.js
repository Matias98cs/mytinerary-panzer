import React, { useEffect, useState } from 'react'
import './Alerts.css'

function Alerts({error}) {
    const [msg,setMsg] = useState("")
    useEffect(() => {
        setMsg(error)
    }, [error])
    
    setTimeout(() => {
        setMsg("")
    }, 4000)
  return (
    <>
        {
            msg
            ?
            <div className='Container-message' id="msjAnimation">
                <p id='msj'>{msg}</p>
            </div>
            :
            null
        }
    </>
  )
}

export default Alerts
