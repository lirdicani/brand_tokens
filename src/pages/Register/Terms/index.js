import React from 'react';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.css';

class Terms extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className={'terms  d-flex justify-content-between '}>
                <div><Input type='checkbox' name='check' /></div>
                <div className='d-flex flex-column'><h6 className='terms-title'>I have read and agree to the Brand Token’s 
                    <Link className='terms-links' to='/termspage'> terms of service</Link>,
                    <Link className='terms-links' to='/privacypolicy'> privacy plicy</Link>, 
                    and I agree to use our logo at Brand Tokens website</h6>
                    <span><i>You should read Terms</i></span>
                </div>
            </div>
        )
    }
}

export default Terms;