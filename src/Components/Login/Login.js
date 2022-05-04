import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <h2 className='login-text'>Login Please</h2>
            <div className='login-form'>
                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" id="" placeholder='Your Email' /> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" id="" placeholder='Your Password' /> <br /> <br />
                <input className='login-submit-btn' type="submit" value="Login" />
            </div>
            <div className='forget-newLink'>
                <button>Forget Your Password?</button>
                <h5>New User?<Link to='/signup'>Register</Link></h5>
            </div>
            <div>
                <h5>OR</h5>
            </div>

        </div>
    );
};

export default Login;