import React, { useEffect, useState } from "react";
import "./Alerts.css";

function Alerts({ error }) {
    const [msj, setMsj] = useState("")

    useEffect(() => {
        setMsj(error)
    }, [error])

    setTimeout( () => {
        setMsj("")
    }, 3000)

  return (
    <>
      {msj ? (
        <div className="Container-message" id="msjAnimation">
          <p>{msj}</p>
        </div>
      ) : null}
    </>
  );
}

export default Alerts;
