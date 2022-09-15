import React, { useEffect, useState } from "react";
import "./Alerts.css";

function Alerts({ succes, error }) {
  const [msgError, setmsgError] = useState("");
  const [msgSucces, setmsgSucces] = useState("");

  useEffect(() => {
    setmsgError(error)
    setmsgSucces(succes)
  },[succes, error])

  const showMessage = () => {
    if (msgSucces) {
      return (
        <div className="Container-message" id="msjAnimation">
          <p id="msj">{msgSucces}</p>
        </div>
      );
    } else if (msgError) {
      return <p className="message-error">{msgError}</p>;
    }
  };

  setTimeout(() => {
    setmsgError("")
    setmsgSucces("")
  }, 4000)

  return (
    <>
      {showMessage()}

    </>
  );
}

export default Alerts;
