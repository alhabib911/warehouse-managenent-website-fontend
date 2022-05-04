import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            <div className='navbar'>
                <h2>Zayn & Myza</h2>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                </nav>
                <nav>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </nav>
            </div>
    );
};

export default Header;