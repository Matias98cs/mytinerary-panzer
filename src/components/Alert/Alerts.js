import React, { useEffect, useState } from 'react'

function Alerts({error}) {
    const [msg,setMsg] = useState("")

    useEffect(() => {
        setMsg(error)
    }, [error])
    
    setTimeout(() => {
        setMsg("")
    }, 3000)
  return (
    <div>
        {
            msg
            ?
            <p>{msg}</p>
            :
            null
        }
    </div>
  )
}

export default Alerts
