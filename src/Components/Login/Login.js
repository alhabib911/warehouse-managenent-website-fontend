import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';import 'react-toastify/dist/ReactToastify.css';
import auth from '../farebase.init';
import './Login.css'
import SocialMediaLogin from './SocialMediaLogin';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlue = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlue = event => {
        setPassword(event.target.value)
    }

    if(user) {
        // navigate('/home')
    }

    const handleUserSignIn = async event =>{
        event.preventDefault()
        await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('https://thawing-wildwood-54865.herokuapp.com/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/myitem')
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Email Sent');
            })
    }

    return (
        <div className='login-container'>
            <h2 className='login-text'>Login Please</h2>
            <form onSubmit={handleUserSignIn}>
                <div className='login-form'> 
                    <label htmlFor="email">Email</label> <br />
                    <input onBlur={handleEmailBlue} type="email" name="email" id="" placeholder='Your Email' required /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input onBlur={handlePasswordBlue} type="password" name="password" id="" placeholder='Your Password' required /> <br />
                    {
                        loading && <p className='loading'>Loading...</p>
                    }
                    <p className='error-text'>
                        {error?.message}
                    </p>
                    <input className='login-submit-btn' type="submit" value="Login" />

                    <div className='forget-newLink'>
                        <button className='forget-link' onClick={handlePasswordReset}>Forget Your Password?</button>
                        <h5>New User?<Link to='/signup'>Register</Link></h5>
                        
                    </div>
                    <div> 
                        <h5>OR</h5>
                        <SocialMediaLogin></SocialMediaLogin>
                        <ToastContainer />
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default Login;