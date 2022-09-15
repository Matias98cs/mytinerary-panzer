import React, { useEffect, useRef } from "react";
import * as jose from "jose";
import { useGetPostNewUserMutation } from "../features/usersAPI";

function SignUpGoogle() {
  const btnDiv = useRef(null);
  const [addNewUser] = useGetPostNewUserMutation()

  async function handleCredentialResponse(response){
    let userObject = jose.decodeJwt(response.credential)

    let data = {
        name: userObject.name,
        lastname: userObject.family_name,
        photo: userObject.picture,
        mail: userObject.email,
        country: "Argentina",
        password: userObject.sub,
        role: 'user',
        from: 'google'
    }
    console.log(data)
    sendNewUser(data)
  }

  function sendNewUser(data) {
    addNewUser(data)
      .unwrap()
      .then(succes => console.log(succes))
      .catch(error => console.log(error))
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
    <div>
        <div ref={btnDiv} ></div>
    </div>
  );
}

export default SignUpGoogle;
