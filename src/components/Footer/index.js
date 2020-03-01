import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='hover-logo d-flex justify-content-center'><img src='/assets/images/hover-logo.svg' alt='hover-logo' /></div>
            <div className='sub-menu d-flex justify-content-center flex-wrap'>
                <a href='/'><div>How It Works</div></a>
                <a href='/'><div>Users</div></a>
                <a href='/'><div>Brand</div></a>
                <a href='/'><div>BLOG</div></a>
                <Link to='/contactus'><div>CONTACT US</div></Link>
                <a href='/'><div>TERMS OF SERVICE</div></a>
                <a href='/'><div>PRIVACY POLICY</div></a>
            </div>
            <div className='social-logo d-flex justify-content-center'>
                <a href='/' ><img src='/assets/images/logo-facebook.svg' alt='facebook-logo' /></a>
                <a href='/' ><img src='/assets/images/logo-linkedin.svg' alt='linkedin-logo' /></a>
                <a href='/' ><img src='/assets/images/logo-twitter.svg' alt='twitter-logo' /></a>
            </div>
            <div className='at-mark d-flex justify-content-center'>2020, all rights reserved</div>
        </div>
    )
}

export default Footer;