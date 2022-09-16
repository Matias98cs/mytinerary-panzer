import React, { useEffect, useState } from "react";

import "../../style/MenuHambur.css";
import { Link as LinkRouter, useLocation, useNavigate } from "react-router-dom";
import { useGetSignOutUserMutation } from "../../features/usersAPI";

const pageDefault = [
  { name: "Home", to: "/", id: 1 },
  { name: "Cities", to: "/cities", id: 2 },
];

const pageUserAdmin = [
  { name: "Home", to: "/", id: 1 },
  { name: "Cities", to: "/cities", id: 2 },
  { name: "New City", to: "/newcity", id: 3 },
  { name: "Edit City", to: "/editcity", id: 4 },
];

const pageUserLogin = [
  { name: "Home", to: "/", id: 1 },
  { name: "Cities", to: "/cities", id: 2 },
];


if(!JSON.parse(localStorage.getItem("user"))){
  pageUserLogin.push({name: "My Itinerary", to: `/mytinerary/${JSON.parse(localStorage.getItem("user"))}`, id: 3})
  pageUserAdmin.push({name: "My Itinerary", to: `/mytinerary/${JSON.parse(localStorage.getItem("user"))}`, id: 5})

}else{
  pageUserAdmin.push({name: "My Itinerary", to: `/mytinerary/${JSON.parse(localStorage.getItem("user")).id}`, id: 5})
  pageUserLogin.push({name: "My Itinerary", to: `/mytinerary/${JSON.parse(localStorage.getItem("user")).id}`, id: 3})
}

const link = (page) => (
  <LinkRouter className="nav_item" to={page.to} key={page.id}>
    {page.name}
  </LinkRouter>
);

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [signoutUser] = useGetSignOutUserMutation();
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) && setLogged(true);
    JSON.parse(localStorage.getItem("user"))?.role === "admin" &&
      setAdmin(true);
  }, []);

  async function signOut() {
    let mail = { mail: JSON.parse(localStorage.getItem("user")).mail };

    console.log(mail);
    signoutUser(mail)
      .unwrap()
      .then((succes) => {
        setLogged(false);
        setAdmin(true);
        localStorage.removeItem("user");
        navigate("/", { replace: true });
        window.location.reload();
      })
      .catch((error) => console.log(error));
  }
  // {JSON.parse(localStorage.getItem('user')).name}

  return (
    <>
      {logged ? (
        <nav className="nav">
          <div className="nav_container">
            <label htmlFor="menu" className="nav_label">
              <img
                src={JSON.parse(localStorage.getItem("user")).photo}
                className="nav_img"
                alt="menu_logo"
              />
            </label>
            <input type="checkbox" id="menu" className="nav_input" />

            {admin ? (
              <div className="nav_menu">{pageUserAdmin.map(link)}</div>
            ) : (
              <div className="nav_menu">{pageUserLogin.map(link)}</div>
            )}
          </div>
          <div className="Header-dropdown">
            {open ? (
              <ul>
                {admin ? (
                  <>
                    <LinkRouter to="#">
                      {JSON.parse(localStorage.getItem("user")).name}
                    </LinkRouter>
                    <LinkRouter onClick={signOut} to="#">
                      Log Out
                    </LinkRouter>
                    <LinkRouter to="/auth/signup">Add new admin</LinkRouter>
                    <LinkRouter to="/auth/signup">Add new user</LinkRouter>
                  </>
                ) : (
                  <>
                    <LinkRouter to="#">
                      {JSON.parse(localStorage.getItem("user")).name}
                    </LinkRouter>
                    <LinkRouter onClick={signOut} to="#">
                      Log Out
                    </LinkRouter>
                  </>
                )}
              </ul>
            ) : null}
          </div>
          <div className="Header-login">
            <img onClick={handleOpenMenu} src="./images/pngegg.png" alt="" />
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <div className="nav_container">
            <label htmlFor="menu" className="nav_label">
              <img
                src="./images/menu.svg"
                className="nav_img"
                alt="menu_logo"
              />
            </label>
            <input type="checkbox" id="menu" className="nav_input" />

            <div className="nav_menu">{pageDefault.map(link)}</div>
          </div>
          <div className="Header-dropdown">
            {open ? (
              <ul>
                <LinkRouter to="auth/signin">Sign In</LinkRouter>
                <LinkRouter to="auth/signup">Sign Up</LinkRouter>
              </ul>
            ) : null}
          </div>
          <div className="Header-login">
            <img onClick={handleOpenMenu} src="./images/pngegg.png" alt="" />
          </div>
        </nav>
      )}
    </>
  );
}
