import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo/Logo.png'
import Cookies from 'js-cookie';
import AuthService from '../../../services/auth.service';
// import TokenService from '../../../----services/tokenService';


export const Login = () => {

    const { postAdminLogin, successLogin } = AuthService();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const getInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value })
    }

    const formSubmit = e => {
        e.preventDefault();
        const loginData = { ...login }

        postAdminLogin(loginData).then((res) => {

            successLogin(res?.data)
            // console.log(res?.data, 'weeeeeeeeeeeeeeeeeeeeeeeeee');

        }).catch((err) => {
            console.log(err, 'rrrrrrrrrrrrrrrrrrrr');
        })

    }
    return (
        <React.Fragment>
            <div className="login">
                <div className='bg_element_1'></div>
                <div className='bg_element_2'></div>
                <div className="card cardBodyRelative">
                    <div className="cardBodyAbsolute"></div>
                    <div className='loginLogoOuter'><img src={logo} className='loginLogo' alt="" /></div>
                    <div className="card-body ">
                        <div className="loginOuter">
                            <div className="loginHeader">
                                Sign in your account
                            </div>
                            <form className="loginBody" onSubmit={formSubmit} >
                                <div className="fields">
                                    <label htmlFor="emailLogin">Email</label>
                                    <input type="email" name='email'
                                        onChange={getInput}
                                    />
                                </div>
                                <div className="fields">
                                    <label htmlFor="passwordLogin">Password</label>
                                    <input type="password" name='password'
                                        onChange={getInput}
                                    />
                                </div>
                                {/* <div className="fields fields1">
                                    <div className='loginCheckBox'>
                                        <input type="checkbox" id='rememberMe' />
                                        <label htmlFor='rememberMe'>Remember me</label>
                                    </div>
                                    <Link>
                                        Forgot Password?
                                    </Link>
                                </div> */}
                                <div className="fields">
                                    {/* <button onClick={(e)=>{e.preventDefault(), getCookie()}}>cookie</button> */}
                                    <button  >
                                        Sign In
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
