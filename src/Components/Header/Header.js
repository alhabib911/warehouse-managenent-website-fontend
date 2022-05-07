import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../farebase.init';
import './Header.css'
import Logo from '../../Logo/Logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <div className='header-top-text'>
                <p>Zayn & Myza Warehouse Management System</p>
            </div>
            <div className='navbar'>
                <div className='logo-container'>
                    <Link to='/home'><img src={Logo} alt="" /></Link>
                </div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/products'>Products</Link>
                </nav>
                <nav>
                    {
                        user && 
                        <Link to='/manage'>Manage Inventory</Link>
                    }
                    {
                        user &&
                        <Link to='/addproduct'>Add Item</Link>
                    }
                    {
                        user ?
                            <Link to='/login' onClick={handleSignOut}>Log Out</Link>
                            :
                            <Link to='/login'>Login</Link>
                            
                    }
                    {
                        user ?
                            <Link to='/login' onClick={handleSignOut}></Link>
                            :
                            <Link to='/signup'>Sign Up</Link>
                            
                    }

                    
                </nav>
            </div>
        </div>
    );
};

export default Header;