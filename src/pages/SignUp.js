import React, { useEffect, useRef, useState } from "react";
import SignUpGoogle from "../components/SignUpGoogle";
import "../style/SignUp.css";
import { useGetPostNewUserMutation } from "../features/usersAPI";

function SignUp() {

  const formRef = useRef();
  const [data, setData] = useState([]);
  const [addNewUser, response] = useGetPostNewUserMutation();
  
  function sendUser() {
    addNewUser(data)
    .unwrap()
    .then((succes)=> console.log(succes))
    .catch ((error) => console.log(error))
  }


  const handleSubmit = (e) =>{
    e.preventDefault()

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    values.from = 'from'
    console.log(values)
    setData(values);
    sendUser()
  }
  
  return (
    <div className="SignUp-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        {/* <div className="sigup-inputs"> */}
          <label>
            name
            <input name="name"/>
          </label>
          <label>
            last Name
            <input name="lastname"/>
          </label>
          <label>
            photo
            <input name="photo" />
          </label>
          <label>
            country
            <input name="country"/>
          </label>
          <label>
            email
            <input name="mail"/>
          </label>
          <label>
            password
            <input name="password"/>
          </label>
          <select name="role">
            <option defaultChecked>Choose role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
            <button type="submit">Create</button>          
        {/* </div> */}
      </form>
      <SignUpGoogle />
      
    </div>
  );
}

export default SignUp;
