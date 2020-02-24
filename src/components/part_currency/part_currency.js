import React from 'react';
import {
    Button,
} from 'reactstrap';

import './part_currency.css';
import Menu from '../menu/menu';

const PartCurrency = () => {
    return (
        <div className="part-currency">
            <Menu />
            <div className="currency-up d-flex justify-content-between">
                <div className="title-groups">
                    <div className="first-title d-flex justify-content-start">CURRENCY OF YOUR BRAND</div>
                    <div className="second-title">
                        Tokenize your brand,<br />
                        Reward your customers
                    </div>
                    <div className="third-title">
                        Blockchain convinces us that every brand can issue their token, build its value and community around it. Around your own token instead of one universal token for all. <br/>
                        all in one platform for everything you need: engagement, marketing optimization, exchange, ecommerce, social media, communication, aggregate data and much more.
                    </div>
                    <div className="d-flex justify-content-start">
                        <Button className="apply-btn-currency d-flex justify-content-between">
                            <span>APPLY NOW</span>
                            <div><img src='/assets/images/arrow-right.svg' alt='arrow-right' /></div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartCurrency;