import React, { useEffect, useRef } from "react";
import * as jose from "jose";

function SingInGoogle() {
    const divBtn = useRef(null);

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let data = {
            email: userObject.email,
            pass: userObject.sub,
        }
        console.log(data)
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1028505588373-p2o75qn886u82uorrtoniua3h24cb3eb.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'singin'
        })
        google.accounts.id.renderButton(
            divBtn.current,
            { theme: "outline", size: "medium", text: 'singin_with' }
        );
    }, []);

    return (

        <div>
            <div ref={divBtn}></div>
        </div>

    );
}

export default SingInGoogle;
