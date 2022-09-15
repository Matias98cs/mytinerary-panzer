import React, { useRef, useState } from "react";
import SignUpGoogle from "../components/SignUpGoogle";
import "../style/SignUp.css";
import { useGetPostNewUserMutation } from "../features/usersAPI";
import Alerts from "../components/Alert/Alerts";

function SignUp() {

  const formRef = useRef();
  const [addNewUser] = useGetPostNewUserMutation();
  const [error, setError] = useState("");
  function sendUser(values) {
    addNewUser(values)
    .unwrap()
    .then((succes)=> {
      setError("User created")
    })
    .catch (error => setError(error.data.message))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const formSignUp = document.querySelector("#form-signup");
    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    values.from = 'form'
    if(values.country == "" || values.lastname == "" || values.mail == "" || values.name == "" || values.password == "" || values.photo == "" || values.role == ""){
      setError("Please enter all data")
    }else{
      sendUser(values)
      formSignUp.reset()    
    }
    
  }
  
  return (
    <div className="SignUp-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} ref={formRef} id="form-signup">
          <label>
            Name
            <input name="name" type="text"/>
          </label>
          <label>
            Last Name
            <input name="lastname" type="text"/>
          </label>
          <label>
            Photo
            <input name="photo" />
          </label>
          <label>
            Country
            <input name="country" type="text"/>
          </label>
          <label>
            Email
            <input name="mail" type="email"/>
          </label>
          <label>
            Password
            <input name="password" type="password"/>
          </label>
          <select name="role">
            <option defaultChecked>Choose role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
            <button type="submit">Create</button>          
      </form>
      <SignUpGoogle />
      <Alerts error={error}/>
    </div>
  );
}

export default SignUp;
