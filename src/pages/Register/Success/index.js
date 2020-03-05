import React from 'react';

import './style.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Success extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        };

        this.props.changeSpecialClass('');
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <div className='success'>
                <div className='success-collapse-effect'></div>
                <div className='success-container'>
                    <div className='success-form'>
                        <div className='success-icon d-flex justify-content-center'><img src='/assets/images/raising-hands.svg' alt='success-icon' /></div>
                        <h6 className='success-top-title'>YOU MADE IT</h6>
                        <h3 className='success-words'>Thank you for registering your interest</h3>
                        {/* <div className='success-article'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus. Etiam eleifend lectus tempor sodales vel semper diam lobortis.</div> */}
                        <div className='success-btn-group d-flex justify-content-center'>
                            <div><Link to='/'><Button className='back-home-btn'>BACK TO HOME</Button></Link></div>
                            <div><Link to='contactus'><Button className='contact-btn'>CONTACT US</Button></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Success;