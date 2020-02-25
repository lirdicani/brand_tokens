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
                        <div className='logo-tab'><img src='/assets/images/zalando.svg' alt='logo' /></div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        <div className='logo-tab'><img src='/assets/images/wework.svg' alt='logo' /></div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        <div className='logo-tab'><img src='/assets/images/uber.svg' alt='logo' /></div>
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
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Selective sales</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Newsletter</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Support</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body className='mission-cards-top-title'>
                                    <CardTitle className='d-flex align-items-center'>Redeem</CardTitle>
                                    <div className='card-text'>
                                        <p className='subject'>Gift card</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Discount code</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Perks</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Access</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <Card body className='mission-cards-top-title'>
                                    <CardTitle className='d-flex align-items-center'>Distribution - 1</CardTitle>
                                    <div className='card-text'>
                                        <p className='subject'>Sales - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Selective sales - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Newsletter - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Support - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body className='mission-cards-top-title'>
                                    <CardTitle className='d-flex align-items-center'>Redeem - 1</CardTitle>
                                    <div className='card-text'>
                                        <p className='subject'>Gift card - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Discount code - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Perks - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Access - 1</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="6">
                                <Card body className='mission-cards-top-title'>
                                    <CardTitle className='d-flex align-items-center'>Distribution - 2</CardTitle>
                                    <div className='card-text'>
                                        <p className='subject'>Sales - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Selective sales - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Newsletter - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Support - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body className='mission-cards-top-title'>
                                    <CardTitle className='d-flex align-items-center'>Redeem - 2</CardTitle>
                                    <div className='card-text'>
                                        <p className='subject'>Gift card - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Discount code - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className='subject'>Perks - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
                                    </div>
                                    <div className='card-text'>
                                        <p className="subject">Access - 2</p>
                                        <p className='content'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</p>
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