import React, { useRef, useState } from "react";
import SingInGoogle from "../components/SignInGoogle";
import "../style/SignIn.css";
import { useGetSignInUserMutation } from "../features/usersAPI";
import Alerts from "../components/Alert/Alerts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "../features/messageSlice";
import { setAuthUser } from "../features/userSlice";

function SignIn() {
  const formData = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signinForm] = useGetSignInUserMutation();
  const [error, setError] = useState("")

  
  const handleSubmit = e => {
    e.preventDefault()
    const formSignUp = document.querySelector("#singin");
    const forData = new FormData(formData.current)
    const values = Object.fromEntries(forData)
    values.from = 'form'
    if(values.mail == "" || values.pass == ""){
      dispatch(setMessage({
        message: 'Please complete all fields',
        success: false
      }))
    }else{
      singInUser(values)
      formSignUp.reset()
    }
  }

  async function singInUser(values) {
    try {
      let res = await signinForm(values)
      if(res.data){
        dispatch(setMessage({
          message: `Welcome ${res.data.response.user.name}`,
          success: true
        }))
        localStorage.setItem('token', res.data.response.token)
        dispatch(setAuthUser(res.data.response.user))
        navigate("/", {replace: true})
      }else if(res.error){
        dispatch(setMessage({
          message: res.error.data.message,
          success: false
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    
    <div className="SignIn-container">
      <h2 className="signin-title">Sign In</h2>
      <form id="singin" className="form-signin" ref={formData} onSubmit={handleSubmit}>
        <label >
          Email
          <input name="mail" type="email" placeholder="example@gmail.com"/>
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
    </>
  );
}

export default SignIn;
