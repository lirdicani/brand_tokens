import classnames from 'classnames';
import React, { useState } from 'react';
import { 
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

import './style.css';

const MissionTabModule = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav className='mission-tab-group d-flex justify-content-end' tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        <div className='logo-tab'><img src='/assets/images/uber.svg' alt='logo' /></div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        <div className='logo-tab'><img src='/assets/images/zalando.svg' alt='logo' /></div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        <div className='logo-tab'><img src='/assets/images/Nike.svg' alt='logo' /></div>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="6">
                            <Card body className='mission-cards-top-title'>
                                <CardTitle className='d-flex align-items-center'>Distribution</CardTitle>
                                <div className='card-text'>
                                    <p className='subject'>Sales</p>
                                    <p className='content'>Every time user make a purchase, he is being rewarded with tokens.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Selective Sales</p>
                                    <p className='content'>Bigger reward for specific purchases, like promotions or sales</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Newsletter</p>
                                    <p className='content'>Reward users when they sign up for a newsletter or read it.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Support</p>
                                    <p className='content'>Reward users for patiance with their support tickets.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body className='mission-cards-top-title'>
                                <CardTitle className='d-flex align-items-center'>Redeem</CardTitle>
                                <div className='card-text'>
                                    <p className='subject'>Gift card</p>
                                    <p className='content'>Tokens can be redeemed for gift cards.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Discount code</p>
                                    <p className='content'>Clients can exchange their tokens for discount codes.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Perks</p>
                                    <p className='content'>Priority orders for users with high token stake.</p>
                                </div>
                                <div className='card-text'>
                                    <p className="subject">Early Access</p>
                                    <p className='content'>Users with specific stake of tokens can get an early access to new collections.</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>                     
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <Card body className='mission-cards-top-title'>
                                <CardTitle className='d-flex align-items-center'>Distribution</CardTitle>
                                <div className='card-text'>
                                    <p className='subject'>UberMiles</p>
                                    <p className='content'>For each mile drive with Uber user could get tokens</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>For reviews</p>
                                    <p className='content'>Users earn tokens for reviews of drivers</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Good Drivers</p>
                                    <p className='content'>Drivers could get tokens for receiving great reviews.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Referal Program</p>
                                    <p className='content'>Users earn UBER tokens for refering new clients</p>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body className='mission-cards-top-title'>
                                <CardTitle className='d-flex align-items-center'>Redeem</CardTitle>
                                <div className='card-text'>
                                    <p className='subject'>Select or Black</p>
                                    <p className='content'>Upgrade your ride to Select or Black with Uber tokens</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Discount code</p>
                                    <p className='content'>Clients can exchange their Uber tokens for discount codes</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Priority Support</p>
                                    <p className='content'>Get priority status for your support tickets.</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="6">
                            <Card body className='mission-cards-top-title'>
                                <CardTitle className='d-flex align-items-center'>Distribution</CardTitle>
                                <div className='card-text'>
                                    <p className='subject'>Sales</p>
                                    <p className='content'>Every time user make a purchase, he is being rewarded with tokens.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Nike Training Club</p>
                                    <p className='content'>Users can earn tokens for training with Nike Training Club App.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>App onboarding</p>
                                    <p className='content'>Reward users for install and going throught onboarding process on Nike's apps.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Social Media</p>
                                    <p className='content'>Reward you followers for sharing and promoting your content.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body className='mission-cards-top-title'>
                                <CardTitle className='d-flex align-items-center'>Redeem</CardTitle>
                                <div className='card-text'>
                                    <p className='subject'>NikePlus Membership</p>
                                    <p className='content'>Clients with big enought token stakes could get NikePlus Membership.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Discount codes</p>
                                    <p className='content'>Clients can exchange their NIKE tokens for discount codes.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Voting</p>
                                    <p className='content'>Token holders can vote for next design.</p>
                                </div>
                                <div className='card-text'>
                                    <p className='subject'>Early Access</p>
                                    <p className='content'>Users with specific stake of tokens can get an early access to new collections.</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default MissionTabModule;