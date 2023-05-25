import React, { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI';
import { GoogleLogin } from '@react-oauth/google';
import logo from '../assets/Linkedin-logo.png';
import { useNavigate } from 'react-router-dom';
import '../sass/Register.scss';
import { toast } from "react-toastify";

export default function RegisterComponent() {
    let navigate = useNavigate();

    const [credentails, setCredentials] = useState({});

    const register = async () => {
        try {
            let res = await RegisterAPI(credentails.email, credentails.password);
            toast.success('Welcome to Linkedin!')
        } catch (err) {
            console.log(err);
            toast.error("Please Check your Credentials");
        }
    };

    const googleSignIn = async () => {
        try {
            let res = await GoogleSignInAPI(credentails);
            toast.success('Welcome to Linkedin!')
        } catch (err) {
            toast.error('Please check your credentials');
        }
    }

    return (
        <div className='register-page__wrapper'>
            <div className="register-page__header">
                <div className="register-page__logo-container">
                    <img src={logo} className='register-page__logo'/>
                </div>
            </div>
            
            <h1 className='register-page__subtitle'>Make the most of your professional life</h1>
            
            <div className="register-page__inner-wrapper">
                <form className='register-page__form'>
                    <section className='register-page__form-body'>
                        <div className="register-page__form-input-container">
                            <label className='input__label'>Email</label>
                            <input
                                className="input__input"
                                required
                                type="email"
                                name='email'
                                onChange={(event) =>
                                    setCredentials({ ...credentails, email: event.target.value })
                                }
                            />

                            <label className='input__label'>Password (6 or more characters)</label>
                            <div className='register-page__password-container'>
                                <input
                                    className='input__input'
                                    required
                                    type='password'
                                    name='password'
                                    onChange={(event) =>
                                        setCredentials({ ...credentails, password: event.target.value })
                                    }
                                />
                                <button className='register-page__show-password' type='button'>Show</button>
                            </div>
                        </div>

                        <span className='register-page__form-body-agreement'>
                            By clicking Agree & Join, you agree to the Linkedin <a className='register-page__form-body-agreement-link' href='#'>User Agreement</a>, <a className='register-page__form-body-agreement-link' href='#'>Privacy Policy</a> and <a className='register-page__form-body-agreement-link' href='#'>Cookie Policy</a>.
                        </span>

                        <button
                            type='submit'
                            className='register-page__form-body-submit'
                            value='Agree & Join'
                            onClick={register}
                        >
                            Agree & Join
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

                            <div className="third-party__google-btn-container">
                                <div className="third-party__google">
                                    <GoogleLogin type='standard' width='350' text='signup_with' shape='pill' logo_alignment='center'  onClick={googleSignIn} />
                                </div>
                            </div>
                        </div>
                    </section>
                </form>

                <p className='sign-in__container'>
                    Already on Linkedin? <span className='sign-in__link' onClick={() => navigate("/login")}>Sign in</span>
                </p>
            </div>
        </div>
    )
}
