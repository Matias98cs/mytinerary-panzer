import React from "react";
import "../style/Header.css";
import Menu from "./menu_hambur/Menu";


export default function Header() {

  return (
    <header>
      <div className="Header-logo">
        <img src="images/logo.png" alt="" />
        <h2>My Tinerary</h2>
      </div>
        <Menu />  
    </header>
  );
}
