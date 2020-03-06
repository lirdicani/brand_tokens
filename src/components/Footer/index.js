import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='hover-logo d-flex justify-content-center'><img src='/assets/images/hover-logo.svg' alt='hover-logo' /></div>
            <div className='sub-menu d-flex justify-content-center flex-wrap'>
                <HashLink to='/#howitworks'><div>HOW IT WORKS</div></HashLink>
                <HashLink to='/#users'><div>USERS</div></HashLink>
                <HashLink to='/#brands'><div>BRANDS</div></HashLink>
                <HashLink to='/blog'><div>BLOG</div></HashLink>
                <HashLink to='/contactus'><div>CONTACT US</div></HashLink>
                {/* <HashLink to='/termspage'><div>TERMS OF SERVICE</div></HashLink> */}
                <HashLink ><div>TERMS OF SERVICE</div></HashLink>
                <HashLink to='/privacypolicy'><div>PRIVACY POLICY</div></HashLink>
            </div>
            <div className='social-logo d-flex justify-content-center'>
                <a href='https://www.facebook.com/Brand-Tokens-104051281046530/?epa=SEARCH_BOX' ><img src='/assets/images/logo-facebook.svg' alt='facebook-logo' /></a>
                <a href='https://www.linkedin.com/company/brand-tokens/about/' ><img src='/assets/images/logo-linkedin.svg' alt='linkedin-logo' /></a>
                <a href='/' ><img src='/assets/images/logo-twitter.svg' alt='twitter-logo' /></a>
            </div>
            <div className='at-mark d-flex justify-content-center'>2020, all rights reserved</div>
        </div>
    )
}

export default Footer;