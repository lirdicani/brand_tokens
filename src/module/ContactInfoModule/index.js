import React from 'react';

import './style.css';

class ContactInfoModule extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div className='blog-post-contact-information'>
                <div className='indivi-member-contact-info d-flex justify-content-center'>
                    <div><a href={this.props.person_infor.facebook} ><img src='/assets/images/logo-facebook.svg' alt='logo-facebook' /></a></div>
                    <div><a href={this.props.person_infor.twiter} ><img src='/assets/images/logo-twitter.svg' alt='logo-twitter' /></a></div>
                    <div><a href={this.props.person_infor.linkedin} ><img src='/assets/images/logo-linkedin.svg' alt='logo-linkedin' /></a></div>
                </div>
            </div>
        );
    }
}

export default ContactInfoModule;