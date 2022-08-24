import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../style/Header.css";

const page = [
  { name: "Home", to: "/" },
  { name: "Cities", to: "/cities" },
  { name: "New City", to: "/newcity" },

];
const link = (page) => (
  <LinkRouter className=" btnHover" to={page.to}>
    {page.name}
  </LinkRouter>
);

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
      <div className="Header-link">
        {page.map(link)}
        <div className="Header-login">
          <img onClick={handleOpenMenu} src="./images/pngegg.png" alt="" />
        </div>
      </div>
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
    </header>
  );
}
