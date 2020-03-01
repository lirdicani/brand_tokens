import React from 'react';
import {
    Button,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import './style.css';

const PartCurrency = () => {
    return (
        <div className="part-currency">
            <div className="currency-up d-flex justify-content-between">
                <div className="title-groups">
                    <div className="first-title d-flex justify-content-start">CURRENCY OF YOUR BRAND</div>
                    <div className="second-title">
                        Tokenize your brand,<br />
                        Reward your customers
                    </div>
                    <div className="third-title">
                        Blockchain convinces us that every brand can issue their token, build its value and community around it. Around your own token instead of one universal token for all. <br/>
                        Brand Tokens is all in one platform to manage all your tokens needs for engagement, community, management, reward, appliance, utility and sales management
                    </div>
                    <div className="d-flex justify-content-start">
                        <Link to='/register' className='none-company-link-decoration'>
                            <Button className="apply-btn-currency d-flex justify-content-between">
                                <span>APPLY NOW</span>
                                <div><img src='/assets/images/arrow-right.svg' alt='arrow-right' /></div>
                            </Button>    
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartCurrency;