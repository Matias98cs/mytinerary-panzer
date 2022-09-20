import React, { useEffect, useState } from "react";
import "../../style/MenuHambur.css";
import { Link as LinkRouter, useLocation, useNavigate } from "react-router-dom";
import { useGetSignOutUserMutation } from "../../features/usersAPI";
import {useDispatch, useSelector} from 'react-redux'
import {deleteAuthUser} from '../../features/userSlice'

const pageDefault = [
  { name: "Home", to: "/", id: 1 },
  { name: "Cities", to: "/cities", id: 2 },
];

const pageUserAdmin = [
  { name: "Home", to: "/", id: 1 },
  { name: "Cities", to: "/cities", id: 2 },
  { name: "New City", to: "/newcity", id: 3 },
  { name: "Edit City", to: "/editcity", id: 4 },
  {name: "My Itinerary", to: `/mytinerary/mytineraries`, id: 5}
];

const pageUserNormal = [
  { name: "Home", to: "/", id: 1 },
  { name: "Cities", to: "/cities", id: 2 },
  {name: "My Itinerary", to: `/mytinerary/mytineraries`, id: 3}
];

const link = (page) => (
  <LinkRouter className="nav_item" to={page.to} key={page.id}>
    {page.name}
  </LinkRouter>
);

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [signoutUser] = useGetSignOutUserMutation();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user)
  const role = useSelector(state => state.auth.role)
  const logged = useSelector(state => state.auth.logged)
  const dispatch = useDispatch()
  const [admin , setAdmin] = useState()

  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    if(role === "admin"){
      setAdmin(true)
    }else if(role === "user") {
      setAdmin(false)
    }
  }, [role])


  async function signOut() {
  
    try{
      await signoutUser(user.mail)
      localStorage.removeItem('token')
      dispatch(deleteAuthUser())
      navigate("/", {replace: true})

    }catch(error){
      console.log(error)
    }

  }

  return (
    <>
      {logged ? (
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

            {admin ? (
              <div className="nav_menu">{pageUserAdmin.map(link)}</div>
            ) : (
              <div className="nav_menu">{pageUserNormal.map(link)}</div>
            )}
          </div>
          <div className="Header-dropdown">
            {open ? (
              <ul>
                {admin ? (
                  <>
                    <LinkRouter to="#">
                      {user.name}
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
                      {user.name}
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
            <img onClick={handleOpenMenu} src={user.photo} alt="profile" />
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
