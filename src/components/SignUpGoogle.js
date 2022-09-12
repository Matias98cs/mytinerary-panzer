import React, { useEffect, useRef } from "react";
import * as jose from "jose";

function SignUpGoogle() {
  const btnDiv = useRef(null);
  console.log(btnDiv.current);

  async function handleCredentialResponse(response){
    let userObject = jose.decodeJwt(response.credential)
    console.log(userObject)

    let data = {
        name: userObject.name,
        photo: userObject.picture,
        email: userObject.email,
        pass: userObject.sub,
        role: 'user',
        from: 'google'
    }

    console.log(data)
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
        { theme: "outline", size: "medium", text: 'signup_with' } 
      );
  }, []);

  return (
    <div>
        <div ref={btnDiv} ></div>
    </div>
  );
}

export default SignUpGoogle;
