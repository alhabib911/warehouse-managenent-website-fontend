import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';
import auth from '../farebase.init';
import './SocialMediaLogin.css'
import { toast, ToastContainer } from 'react-toastify';
// import { toast, ToastContainer } from 'react-toastify';

// const auth =getAuth()
const SocialMediaLogin = () => {
    const googleProvider = new GoogleAuthProvider()
    

    const handleGoogleSignIn =() => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user =result.user
        })
        .catch(error =>{
            console.log(error);
        })
        .then(() => {
            toast('Thank You for signin');
        })
    }
    return (
        <div>
            <button className='google-login-btn' onClick={handleGoogleSignIn}> <FcGoogle></FcGoogle> <span>Google Login</span></button>  
            <ToastContainer />    
        </div>
    );
};

export default SocialMediaLogin;        