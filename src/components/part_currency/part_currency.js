import React from 'react';
import {
    Button,
} from 'reactstrap';

import Menu from '../menu/menu';
import './part_currency.css';

const PartCurrency = () => {
    return (
        <div className="part-currency">
            <Menu />
            <div className="currency-up d-flex justify-content-between">
                <div className="title-groups">
                    <div className="first-title d-flex justify-content-start">CURRENCY OF YOUR BRAND</div>
                    <div className="second-title">
                        Tokenize your brand, Reward your customers
                    </div>
                    <div className="third-title">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus. Etiam eleifend lectus tempor sodales vel semper diam lobortis</div>
                    <div className="d-flex justify-content-start"><Button className="apply-btn-currency"><span>APPLY NOW</span></Button></div>
                </div>
            </div>
            {/* <div className="token-pictures">Pictures</div> */}
        </div>
    )
}

export default PartCurrency;