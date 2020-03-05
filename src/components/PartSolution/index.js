import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import './style.css';

const PartSolution = () => {
    return (
        <div className="partMainTitle">
            <div className='solution-main-title'>What we do</div>
            <div className="role-list d-flex justify-content-between">
                <Col>
                    <Row lg='4' md='2' sm='2' xs='1'>
                        <div className='role-list-item d-flex align-items-center flex-column'>
                            <div className='role-icon'><img src='/assets/images/corner-top-right.svg' alt='top-right' /></div>
                            <div className="role-title">Brand Token <br /> issuing</div>
                            {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                        </div>
                        <div className='role-list-item d-flex align-items-center flex-column'>
                            <div className='role-icon'><img src='/assets/images/radar.svg' alt='radar' /></div>
                            <div className="role-title">Token marketing <br /> automation</div>
                            {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                        </div>
                        <div className='role-list-item d-flex align-items-center flex-column'>
                            <div className='role-icon'><img src='/assets/images/p-chart.svg' alt='p-chart' /></div>
                            <div className="role-title">Unique data <br /> insight</div>
                            {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                        </div>
                        <div className='role-list-item d-flex align-items-center flex-column'>
                            <div className='role-icon'><img src='/assets/images/replace.svg' alt='replace' /></div>
                            <div className="role-title">Exchange and <br /> wallet  provider</div>
                            {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                        </div>
                    </Row>
                </Col>
            </div>
            <div className="mainTitle d-flex justify-content-between" id = "howitworks">
                <div className="mainTitle-groups">
                    <div className="mainTitle-link d-flex justify-content-start">SOLUSION</div>
                    <div className="mainTitle-subject">
                        How it works
                    </div>
                    <div className="mainTile-content-1">
                        Brand Tokens platform allows issuing brand loyalty tokens on the Blockchain. Unlike loyalty points,
                         tokens are valued in real-time and can be traded and transferred between users.
                         Brands can reward their clients,
                         just like with points, but users can redeem them for discounts,
                         products and services or exchange for cryptocurrencies like Bitcoin or Ethereum.
                         Brands can use their tokens to acquire new customers or reward loyal clients for purchases,
                         engagement in social media, participation in events or sharing their personal data.</div>
                    {/* <div className="mainTile-content-2">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.</div> */}
                    <div className="mainTitle-apply-btn d-flex justify-content-start"><Link to='/register' >APPLY NOW</Link></div>
                </div>
                <div className="main-title-diagram">
                    <div className='top-diagram d-flex justify-content-between'>
                        <div className='top-arrow'><img src='/assets/images/Group 2.svg' alt='top-left-arrow' /></div>
                        <div className='shop-symbol-group'>
                            <div className="shop-symbol"><img src='/assets/images/shop.svg' alt='shop' className='shop-symbol-icon' /></div>
                            <div className='shop-name'>Shop</div>
                        </div>
                        <div className='top-arrow'><img src='/assets/images/Group 4.svg' alt='top-right-arrow' /></div>
                    </div>
                    <div className='mid-diagram d-flex justify-content-between align-items-center'>
                        <div className='diagram-brand'>
                            <div className='brand-logo'><img src='/assets/images/brand-selected.svg' alt='brand-selected' /></div>
                            <div className='brand-title'>Brand</div>
                        </div>
                        <div className='pair-directions'><img src='/assets/images/Group 5.svg' alt='pair-direction' /></div>
                        <div className='rotate-directions d-flex justify-content-center align-items-center'>
                            <div><img src='/assets/images/repeat.svg' alt='repeat' /></div>
                        </div>
                        <div className='pair-directions'><img src='/assets/images/Group 6.svg' alt='pair-direction' /></div>
                        <div className='diagram-user'>
                            <div className='user-logo'><img src='/assets/images/users-wm.svg' alt='users-wm' /></div>
                            <div className='user-title'>User</div>
                        </div>
                    </div>
                    <div className='bottom-diagram d-flex justify-content-between align-items-end'>
                        <div className='bottom-arrow'><img src='/assets/images/Group 8.svg' alt='bottom-left-arrow' /></div>
                        <div className='shop-symbol-group'>
                            <div className='shop-name'>Earn </div>
                            <div className="shop-symbol"><img src='/assets/images/loan.svg' alt='loan' className='shop-symbol-icon' /></div>
                        </div>
                        <div className='bottom-arrow'><img src='/assets/images/Group 7.svg' alt='bottom-right-arrow' /></div>
                    </div>
                </div>
            </div>
            <div className='solution-pic-group-1440'><img src='/assets/images/solution-group.svg' alt='solution-pic-group' /></div>
            {/* <div className='solution-pic-group'><img src='/assets/images/solution-group.svg' alt='solution-pic-group' /></div> */}
        </div>
    )
}

export default PartSolution;