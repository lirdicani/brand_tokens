import React from 'react';

import { Input } from 'reactstrap';

import './style.css';

class Terms extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className='terms d-flex justify-content-between'>
                <div><Input type='checkbox' name='checkbox' /></div>
                <div><h6 className='terms-title'>I have read and agree to the Brand Token’s 
                    <a className='terms-links' href='/'> terms of service</a>,<br />
                    <a className='terms-links' href='/'> privacy plicy</a>,
                    and <a className='terms-links' href='/' >GDPR policy</a>.
                    and I agree to use our logo at Brand Tokens website</h6></div>
            </div>
        )
    }
}

export default Terms;