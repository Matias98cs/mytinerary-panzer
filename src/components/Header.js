import React, { useState } from "react";
import "../style/Header.css";
import Menu from "./menu_hambur/Menu";


export default function Header() {

  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    if(open === true) {
      setOpen(false)
      console.log("open")
    } else {
      setOpen(true)
      console.log("close")

    }
  }


  return (
    <header>
      <div className="Header-logo">
        <img src="images/logo.png" alt="" />
        <h2>My Tinerary</h2>
      </div>
        {/* <div className="Header-login">
          <img onClick={handleOpenMenu} src="./images/pngegg.png" alt="" />
        </div> */}
      
      <div className="Header-dropdown">
          {
            open
                ?
                <ul>
                  <li>Profile</li>
                  <li>Log In</li>
                </ul>
                :
                null
          }
        </div>
      
        <Menu />  
        
    </header>
  );
}
