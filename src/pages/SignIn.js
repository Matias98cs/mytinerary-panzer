import React from "react";
import SingInGoogle from "../components/SignInGoogle";
import "../style/SignIn.css";


function SignIn() {
    return (
        <div className="SignIn-container">
            <h2 className="signin-title">Sign In</h2>
            <form>
                <div className="signIn-inputs">
                    <label>
                        Email
                        <input/>
                    </label>
                    <label>
                        Password
                        <input/>
                    </label>
                </div>
                <div className="signIn-btn">
                    <button>Enter</button>
                </div>
            </form>
            <SingInGoogle />
        </div>
    );
}


export default SignIn