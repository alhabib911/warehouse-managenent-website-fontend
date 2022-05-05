import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../farebase.init';
import './Header.css'

const Header = () => {
    const[user] =useAuthState(auth)
    const handleSignOut =() =>{
        signOut(auth)
    }
    return (
            <div className='navbar'>
                <h2>Zayn & Myza</h2>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                </nav>
                <nav>
                    {
                        user ?
                        <Link to='/login' onClick={handleSignOut}>Log Out</Link>
                        :
                        <Link to='/login'>Login</Link>
                    }
                    <Link to='/signup'>Sign Up</Link>
                </nav>
            </div>
    );
};

export default Header;