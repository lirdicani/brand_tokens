import React from 'react';

import './footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className='hover-logo d-flex justify-content-center'><a href='/'><img src='/assets/images/hover-logo.svg' alt='hover-logo' /></a></div>
            <div className='sub-menu d-flex justify-content-center flex-wrap'>
                <a href='/'><div>PRODUCT</div></a>
                <a href='/'><div>SOLUSIONS</div></a>
                <a href='/'><div>CLIENTS</div></a>
                <a href='/'><div>COMPANY</div></a>
                <a href='/'><div>BLOG</div></a>
                <a href='/'><div>CONTACT US</div></a>
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