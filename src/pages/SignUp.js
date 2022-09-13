import React from "react";
import SignUpGoogle from "../components/SignUpGoogle";
import "../style/SignUp.css";

function SignUp() {
  return (
    <div className="SignUp-container">
      <h2>Sign Up</h2>
      <form>
        <div className="sigup-inputs">
          <label>
            name
            <input />
          </label>
          <label>
            photo
            <input />
          </label>
          <label>
            email
            <input />
          </label>
          <label>
            password
            <input />
          </label>
          <select>
            <option defaultChecked>Choose role</option>
            <option>user</option>
            <option>admin</option>
          </select>
        </div>
      </form>
      <SignUpGoogle />
    </div>
  );
}

export default SignUp;
