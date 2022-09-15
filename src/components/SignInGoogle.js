import React, { useEffect, useRef } from "react";
import * as jose from "jose";
import { useGetSignInUserMutation } from "../features/usersAPI";
import { useNavigate } from "react-router-dom";

function SingInGoogle() {
    const divBtn = useRef(null);
    const [singInUser] = useGetSignInUserMutation()
    const navigate = useNavigate()

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let data = {
            mail: userObject.email,
            pass: userObject.sub,
            from: "google"
        }
        singIn(data)
    }

    function singIn(data){
        singInUser(data)
        .unwrap()
        .then((succes)=> {
            console.log(succes)
            localStorage.setItem('user', JSON.stringify(succes.response.user))
            navigate("/", {replace: true})
            window.location.reload()
        })
        .catch ((error) => {
            console.log(error)
        })
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
            { theme: "outline", size: "medium", text: 'singin_with',locale: "en" }
        );
    }, []);

    return (

        <div>
            <div ref={divBtn}></div>
        </div>

    );
}

export default SingInGoogle;
