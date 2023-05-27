import React, { useState } from 'react';
import { LoginAPI } from '../api/AuthAPI';
import logo from '../assets/Linkedin-logo.png';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function LoginComponent() {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({});

    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success('Signed in to Linkedin!')
            //navigate('/home');
        } catch (err) {
            console.log(err);
            toast.error("Please Check your Credentials");
        }
    };

    return (
        <div className='login-page__wrapper'>
            <div className="login-page__header">
                <div className="login-page__logo-container">
                    <img src={logo} className='login-page__logo'/>
                </div>
            </div>

            <div className='login-page__inner-wrapper'>
                <h1 className='login-page__subtitle'>Welcome back</h1>
                <p className="login-page__sub-subtitle">Stay updated on your professional world</p>    
                
                <form className='login-page__form'>
                    <section className='login-page__form-body'>
                        <div className="login-page__form-input-container">
                            <input
                                className="input__input"
                                required
                                type="email"
                                name='email'
                                onChange={(event) =>
                                    setCredentials({ ...credentials, email: event.target.value })
                                }
                                placeholder='Email'
                            />

                            <div className='login-page__password-container'>
                                <input
                                    className='input__input'
                                    required
                                    type='password'
                                    name='password'
                                    onChange={(event) =>
                                        setCredentials({ ...credentials, password: event.target.value })
                                    }
                                    placeholder='Password'
                                />
                                    
                                <button className='login-page__show-password' type='button'>Show</button>
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='login-page__form-body-submit'
                            value='Sign in'
                            onClick={login}
                        >
                            Sign in
                        </button>

                        <div className='third-party__container'>
                            <p className="third-party__reg">
                                <span className="third-party__line-wrapper">
                                    <span className="third-party__line"></span>
                                </span>

                                <span className="third-party__content">
                                    <span className="third-party__or">or</span>
                                </span>
                            </p>

{/*}                            <div className="third-party__google-btn-container">
                                <div className="third-party__google">
                                    <GoogleLogin type='standard' width='350' text='signin_with' shape='pill' logo_alignment='center'  onClick={googleSignIn} />
                                </div>
                                </div>*/}
                        </div>
                    </section>
                </form>

                <p className='sign-in__container'>
                    New to Linkedin? <span className='sign-in__link' onClick={() => navigate("/register")}>Sign up</span>
                </p>
            </div>
        </div>
    )
}
