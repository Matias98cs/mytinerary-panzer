import React, { useRef, useState } from "react";
import SingInGoogle from "../components/SignInGoogle";
import "../style/SignIn.css";
import { useGetSignInUserMutation } from "../features/usersAPI";
import Alerts from "../components/Alert/Alerts";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const formData = useRef(null);
  const navigate = useNavigate()
  const [signinForm] = useGetSignInUserMutation();
  const [error, setError] = useState("")

  function singInUser(values) {
    signinForm(values)
        .unwrap()
        .then(succes => {
          setError("Welcome")
          localStorage.setItem('user', JSON.stringify(succes.response.user))
          navigate("/", {replace: true})
        })
        .catch(error => setError(error.data.message))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formSignUp = document.querySelector("#singin");
    const forData = new FormData(formData.current)
    const values = Object.fromEntries(forData)
    values.from = 'form'
    if(values.mail == "" || values.pass == ""){
      setError("Please enter all data")
    }else{
      singInUser(values)
      formSignUp.reset()
    }
  }

  return (
    <div className="SignIn-container">
      <h2 className="signin-title">Sign In</h2>
      <form id="singin" className="form-signin" ref={formData} onSubmit={handleSubmit}>
        <label >
          Email
          <input name="mail" type="email"/>
        </label>
        <label >
          Password
          <input name="pass" type="password"/>
        </label>
        <div className="signIn-btn">
          <button type="submit">Enter</button>
        </div>
      </form>
      <SingInGoogle />
      <Alerts error={error} />
    </div>
  );
}

export default SignIn;
