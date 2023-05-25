import React, { useState } from 'react';
import { LoginAPI } from '../api/AuthAPI';
import logo from '../assets/Linkedin-logo.png';
import { useNavigate } from 'react-router-dom';
import '../sass/Login.scss';
import { toast } from "react-toastify";

export default function LoginComponent() {
    let navigate = useNavigate();

    const [credentails, setCredentials] = useState({});

    const login = async () => {
        try {
            let res = await LoginAPI(credentails.email, credentails.password);
            toast.success('Signed in to Linkedin!')
        } catch (err) {
            console.log(err);
            toast.error("Please Check your Credentials");
        }
    };

    return (
        <div className='login-wrapper'>
            <img src={logo} className='linkedinLogo'/>

            <div className="login-wrapper-inner">
                <h1 className='login-heading'>Sign in</h1>
                <p className="sub-heading">Stay updated on your professional world</p>
            
                <div className="auth-inputs">
                    <input
                        onChange={(event) =>
                            setCredentials({ ...credentails, email: event.target.value })
                        }
                        type="email"
                        className="common-input"
                        placeholder="Email Address"
                    />

                    <input
                        onChange={(event) =>
                            setCredentials({ ...credentails, password: event.target.value })
                        }
                        type="password"
                        className="common-input"
                        placeholder="Password"
                    />
                </div>

                <button onClick={login} className='login-btn'>Log in</button>
            </div>

            <hr className="hr-text" data-content="or" />

            <div className="google-btn-container">
                <p className="go-to-signup">
                    New to LinkedIn?{" "}
                    <span className="join-now" onClick={() => navigate("/register")}>
                        Join now
                    </span>
                </p>
            </div>
        </div>
    )
}
