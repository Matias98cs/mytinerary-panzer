import React, { useEffect, useRef, useState } from "react";
import SignUpGoogle from "../components/SignUpGoogle";
import "../style/SignUp.css";
import { useGetPostNewUserMutation } from "../features/usersAPI";
import Alerts from "../components/Alert/Alerts";

function SignUp() {

  const formRef = useRef();
  const [data, setData] = useState([]);
  const [addNewUser, response] = useGetPostNewUserMutation();
  const [error, setError] = useState("");
  
  function sendUser() {
    addNewUser(data)
    .unwrap()
    .then((succes)=> {
      setError(succes.message)
    })
    .catch ((error) => setError(error.message))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    values.from = 'from'
    if(values.country == "" || values.country == "" || values.country == "" || values.country == "" || values.country == "" || values.country == "" || values.country == ""){
      setError("Please enter all data")
    }
    setData(values);
    sendUser()
  }
  
  return (
    <div className="SignUp-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        {/* <div className="sigup-inputs"> */}
          <label>
            Name
            <input name="name"/>
          </label>
          <label>
            Last Name
            <input name="lastname"/>
          </label>
          <label>
            Photo
            <input name="photo" />
          </label>
          <label>
            Country
            <input name="country"/>
          </label>
          <label>
            Email
            <input name="mail"/>
          </label>
          <label>
            Password
            <input name="password"/>
          </label>
          <select name="role">
            <option defaultChecked>Choose role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
            <button type="submit">Create</button>          
        {/* </div> */}
      </form>
      <SignUpGoogle />
      <Alerts error={error}/>
    </div>
  );
}

export default SignUp;
