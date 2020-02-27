import React from 'react';

import './style.css';
import MissionTabModule from './MissionTabModule';

const PartHow = () => {
    return (
        <div className='partHow d-flex justify-content-between'>
            <div className='how-pic-group-right'><img src='/assets/images/how-group-right.svg' alt='how-group-right-pic' /></div>
            <div className='how-mission'>
                <div className='mission-article'>BRANDS</div>
                <div className='mission-title'>How brands can use their tokens</div>
                {/* <div className="mission-subject">Brand Tokens is all in one platform to manage all 
                    your tokens needs for engagement, community, management, reward, appliance, utility, sales management.</div> */}
                <div className="mission-subject">Most consumers prefer options to redeem their points from time to time.</div>
                <div className="mission-lists">
                    <div className='mission-lists-item d-flex justity-content-start align-items-center'>
                        {/* <span className='mission-lists-item-icon'></span> */}
                        <span className='mission-lists-item-name'>Brand Tokens is all in one platform to manage all 
                    your tokens needs for engagement, community, management, reward, appliance, utility, sales management.</span>
                    </div>
                    {/* <div className='mission-lists-item d-flex justity-content-start align-items-center'>
                        <span className='mission-lists-item-icon'></span>
                        <span className='mission-lists-item-name'>Points have higher</span>
                    </div>
                    <div className='mission-lists-item d-flex justity-content-start align-items-center'>
                        <span className='mission-lists-item-icon'></span>
                        <span className='mission-lists-item-name'>Purchase rates & stronger</span>
                    </div>
                    <div className='mission-lists-item d-flex justity-content-start align-items-center'>
                        <span className='mission-lists-item-icon'></span>
                        <span className='mission-lists-item-name'>Brand association</span>
                    </div> */}
                </div>
                <div className="how-apply-btn-group d-flex justify-content-start align-items-center">
                    <a href='/'><div className='apply-btn-how-icon'>+</div></a>
                    <a href='/'><div className='apply-btn-how'>APPLY NOW</div></a>
                </div>
            </div>
            <div className="mission-detail">
                <div className='select-mission-select-part d-flex justify-content-start align-items-start'>
                    <div className='icon'><img src='/assets/images/agenda.svg' alt='agenda' /></div>
                    <div className='title'>Select brand to see how they can use the platform</div>
                </div>
                <MissionTabModule />
            </div>
            <div className='how-pic-group-left'><img src='/assets/images/Group Copy.svg' alt='Group Copy' /></div>
        </div>
    )
}

export default PartHow;