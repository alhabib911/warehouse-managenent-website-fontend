import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signUp-container'>
            <h2>SignUp Please</h2>
            <div className='signup-form'>
                <label htmlFor="userName">User Name</label> <br />
                <input type="text" placeholder='User Name' /> <br />
                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" id=""
                    placeholder='Your Email' /> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" id="" placeholder='Your Password' /> <br />
                <label htmlFor="confirm-password">Confirm Password</label> <br />
                <input type="password" name="confirm-password" id="" placeholder='Confirm Password' /> <br /> <br />
                <input className='signup-submit-btn' type="submit" value="SignUp" />
            </div>
            <div>
                <h5>Already Have an Account?<Link to='/login'>Login</Link></h5>
            </div>
            <div>
                <h5>OR</h5>
            </div>
        </div>
    );
};

export default SignUp;