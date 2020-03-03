import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='hover-logo d-flex justify-content-center'><img src='/assets/images/hover-logo.svg' alt='hover-logo' /></div>
            <div className='sub-menu d-flex justify-content-center flex-wrap'>
                <a href='/'><div>HOW IT WORKS</div></a>
                <a href='/'><div>USERS</div></a>
                <a href='/'><div>BRANDS</div></a>
                <Link to='/blog'><div>BLOG</div></Link>
                <Link to='/contactus'><div>CONTACT US</div></Link>
                <Link to='/termspage'><div>TERMS OF SERVICE</div></Link>
                <Link to='/privacypolicy'><div>PRIVACY POLICY</div></Link>
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