import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright © 2022 by <Link to='/home'>Zayn & Myza</Link>. All rights reserved.</p>
        </div>
    );
};

export default Footer;