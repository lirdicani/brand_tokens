import React from 'react';

import './style.css';

const PartUsers = () => {
    return (
        <div className="partUsers">
            <div className="PU-top">
                <div className="PU-top-title">USERS</div>
                <div className="PU-top-title">Built for everyone</div>
                {/* <div className="PU-top-title">Consumers who redeem points have higher purchase rates & stronger brand association.</div> */}
            </div>
            <div className="PU-content d-flex justify-content-between">
                <div className="PU-content-subject">
                    <div className="PU-content-subject-title">
                        <div className="content"><img src='/assets/images/office-big.svg' alt='OfficeBig' /></div>
                        <div className="content">Brands</div>
                        <div className="content">Consumers who redeem points have higher purchase rates & stronger brand association.</div>
                    </div>
                    <div className="PU-content-subject-items">
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/stock-market.svg' /><br /> Higher engagement</div>
                            {/* <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/undo-29.svg' /><br />Higher retention</div>
                            {/* <div className='brand-items-intro'>Dol amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/trend-down.svg' /><br />Low breakage</div>
                            {/* <div className='brand-items-intro'>Dolor sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/robot.svg' /><br />Loyalty automation</div>
                            {/* <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/water-hand.svg' /><br />Low cost</div>
                            {/* <div className='brand-items-intro'>Ipsum dolor sit amet, consectetur proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/refund.svg' /><br />Automate Redemption</div>
                            {/* <div className='brand-items-intro'>Dolor sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                    </div>
                </div>
                <div className="PU-content-subject">
                    <div className="PU-content-subject-title">
                        <div className="content"><img src='/assets/images/parent-big.svg' alt='ParentBig' /></div>
                        <div className="content">Users</div>
                        <div className="content">Most consumers prefer options to redeem their points from time to time.</div>
                    </div>
                    <div className="PU-content-subject-items">
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/water-hand.svg' /><br />Liquid loyalty</div>
                            {/* <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/money-transfer.svg' /><br />Transferable</div>
                            {/* <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/bill.svg' /><br />Priced</div>
                            {/* <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/send.svg' /><br />Volatile</div>
                            {/* <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/shuffle-35.svg' /><br />Flexibility when to redeem</div>
                            {/* <div className='brand-items-intro'>Sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'><img src='/assets/images/Benefits-redesign/coins.svg' /><br />Cash-like Token Rewards</div>
                            {/* <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='user-pic-group-left'><img src='/assets/images/user-group.svg' alt='solution-pic-group' /></div>
        </div>
    )
}

export default PartUsers;