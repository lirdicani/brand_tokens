import React from 'react';

import './partUsers.css';
import { ReactComponent as OfficeBig } from '../../images/office-big.svg';
import { ReactComponent as ParentBig } from '../../images/parent-big.svg';

const PartUsers = () => {
    return (
        <div className="partUsers">
            <div className="PU-top">
                <div className="PU-top-title">USERS</div>
                <div className="PU-top-title">Built for everyone</div>
                <div className="PU-top-title">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.</div>
            </div>
            <div className="PU-content d-flex justify-content-between">
                <div className="PU-content-subject">
                    <div className="PU-content-subject-title">
                        <div className="content"><OfficeBig /></div>
                        <div className="content">Brands</div>
                        <div className="content">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div>
                    </div>
                    <div className="PU-content-subject-items">
                        <div className='brand-items'>
                            <div className='brand-items-title'>Higher engagement</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'>Higher retention</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'>Low breakage</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'>Loyalty automation</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'>Low cost</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                    </div>
                </div>
                <div className="PU-content-subject">
                    <div className="PU-content-subject-title">
                        <div className="content"><ParentBig /></div>
                        <div className="content">Customers</div>
                        <div className="content">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div>
                    </div>
                    <div className="PU-content-subject-items">
                        <div className='brand-items'>
                            <div className='brand-items-title'>Liquid loyalty</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'>Transferable</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'>Priced</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                        <div className='brand-items'>
                            <div className='brand-items-title'>Volatile</div>
                            <div className='brand-items-intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin rhoncus.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartUsers;