import React from 'react'
import '../../style/MenuHambur.css'
import { Link as LinkRouter } from "react-router-dom";

const page = [
    { name: "Home", to: "/" },
    { name: "Cities", to: "/cities" },
    { name: "New City", to: "/newcity" },

];
const link = (page) => (
    <LinkRouter className="nav_item" to={page.to}>
        {page.name}
    </LinkRouter>
);

export default function Menu() {
    return (
        <>
            <nav class="nav">
                <div class="nav_container">
                    <label for="menu" class="nav_label">
                        <img src="./images/menu.svg" class="nav_img" alt="menu_logo" />
                    </label>
                    <input type="checkbox" id="menu" class="nav_input" />

                    <div className="nav_menu">
                        {page.map(link)}
                    </div>

                </div>

            </nav>
        </>
    )
}
