import React, { useEffect, useRef, useState } from "react";
import * as jose from "jose";
import { useGetPostNewUserMutation } from "../features/usersAPI";
import Alerts from "./Alert/Alerts";
import { useNavigate } from "react-router-dom";

function SignUpGoogle() {
  const btnDiv = useRef(null);
  const [addNewUser] = useGetPostNewUserMutation()
  const [error, setError] = useState("");
  const navigate = useNavigate()

  async function handleCredentialResponse(response){
    let userObject = jose.decodeJwt(response.credential)

    let data = {
        name: userObject.name,
        lastname: userObject.family_name || userObject.given_name,
        photo: userObject.picture,
        mail: userObject.email,
        country: "Argentina",
        password: userObject.sub,
        role: 'user',
        from: 'google'
    }
    sendNewUser(data)
  }

  function sendNewUser(data) {
    addNewUser(data)
      .unwrap()
      .then(succes => {
        setError('User Created')
        navigate("/auth/signin", {replace: true})
      })
      .catch(error => setError(error.data.message))
  }
  useEffect(() => {
        /* global google */
      google.accounts.id.initialize({
        client_id: '1028505588373-p2o75qn886u82uorrtoniua3h24cb3eb.apps.googleusercontent.com',
        callback: handleCredentialResponse,
        context: 'signup'
      });
      google.accounts.id.renderButton(
        btnDiv.current,
        {  size: "medium", text: "signup_with", 	shape: "circle", locale: "en"} 
      );
  }, []);

  return (
    <>
      <div>
          <div ref={btnDiv} ></div>

      </div>
      <Alerts error={error} />
    </>
  );
}

export default SignUpGoogle;
