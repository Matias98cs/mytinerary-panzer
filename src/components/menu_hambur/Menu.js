import React, { useState } from "react";

import "../../style/MenuHambur.css";
import { Link as LinkRouter } from "react-router-dom";

const page = [
  { name: "Home", to: "/", id:1},
  { name: "Cities", to: "/cities", id:2},
  { name: "New City", to: "/newcity", id:3},
];
const link = (page) => (
  <LinkRouter className="nav_item" to={page.to} key={page.id}>
    {page.name}
  </LinkRouter>
);

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="nav_container">
          <label htmlFor="menu" className="nav_label">
            <img src="./images/menu.svg" className="nav_img" alt="menu_logo" />
          </label>
          <input type="checkbox" id="menu" className="nav_input" />

          <div className="nav_menu">{page.map(link)}</div>
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
          <div className="Header-login">
            <img onClick={handleOpenMenu} src="./images/pngegg.png" alt="" />
          </div>
      </nav>
    </>
  );
}
