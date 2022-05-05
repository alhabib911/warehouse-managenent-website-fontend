import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../farebase.init'
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import SocialMediaLogin from '../Login/SocialMediaLogin';

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true})

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/home')
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confrimPassword) {
            setError('Your Password did not match')
            return;
        }
        if (password.length < 8) {
            setError('Password must be 8 characthers')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='signUp-container'>
            <h2>SignUp Please</h2>
            <form onSubmit={handleCreateUser} >
                <div className='signup-form'>
                    <label htmlFor="userName">User Name</label> <br />
                    <input onBlur={handleNameBlur} type="text" placeholder='User Name' required /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' required /> <br />
                    <label htmlFor="confirm-password">Confirm Password</label> <br />
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Confirm Password' required /> <br />
                    <p className='error-text'>
                        {error}
                    </p>
                    <input className='signup-submit-btn' type="submit" value="SignUp" />

                    <div>
                        <h5>Already Have an Account?<Link to='/login'>Login</Link></h5>
                    </div>
                    <div>
                        <h4>OR</h4>
                        <SocialMediaLogin></SocialMediaLogin>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;