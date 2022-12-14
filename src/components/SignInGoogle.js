import React, { useEffect, useRef, useState } from "react";
import * as jose from "jose";
import { useGetSignInUserMutation } from "../features/usersAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../features/userSlice";
import { setMessage } from "../features/messageSlice";

function SingInGoogle() {
    const divBtn = useRef(null);
    const [singInUser] = useGetSignInUserMutation()
    const dispath = useDispatch()
    const navigate = useNavigate()
    const [msg, setMsg] = useState()
    

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let data = {
            mail: userObject.email,
            pass: userObject.sub,
            from: "google"
        }

        try {
            let res = await singInUser(data)
            if(res.data?.success){
                dispath(setAuthUser(res.data.response.user))
                dispath(setMessage({
                    message: res.data?.message,
                    success: res.data?.success
                }))
                localStorage.setItem('token', res.data.response.token)
                // setMsg(res.data)
                navigate("/", {replace: true})
            }else {
                console.log(res.error)
            }
        }catch(error){
            console.log(error)
        }

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
