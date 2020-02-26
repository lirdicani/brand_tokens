import React from 'react';

import './style.css';

const PartPercent = () => {
    return (
        <div className='partPercent d-flex justify-content-between align-items-start'>
            <div className='percent-static'>
                <div className='num-percent d-flex justify-content-start align-items-baseline'>
                    <div className='numbers'>71%</div>
                    <div className='title'>of consumers</div>
                </div>
                <div className='status-intro'>say that loyalty programs are a meaningful part of their relationship with brands.</div>
            </div>
            <div className='percent-static'>
                <div className='num-percent d-flex justify-content-start align-items-baseline'>
                    <div className='numbers'>86%</div>
                    <div className='title'>of shoppers</div>
                </div>
                <div className='status-intro'>said they’ve joined a loyalty program to collect points for rewards. Another great number is that 75% of shoppers claim they favor companies that have some kind of rewards program.</div>
            </div>
            <div className='percent-static'>
                <div className='num-percent d-flex justify-content-start align-items-start'>
                    <div className='numbers'>95%</div>
                    <div className='title'>of loyalty program members</div>
                </div>
                <div className='status-intro'>are looking to engage with brands via new high-tech solutions like augmented reality and digital loyalty programs. This digital trend is a good thing for retailers.</div>
            </div>
        </div>
    )
}

export default PartPercent;