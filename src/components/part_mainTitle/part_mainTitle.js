import React from 'react';

import './part_mainTitle.css';

const PartMainTitle = () => {
    return (
        <div className="partMainTitle">
            <div className="role-list d-flex justify-content-between">
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'></div>
                    <div className="role-title">Brand Token issuing</div>
                    <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div>
                </div>
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'></div>
                    <div className="role-title">Token marketing automation</div>
                    <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div>
                </div>
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'></div>
                    <div className="role-title">Unique data insight</div>
                    <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div>
                </div>
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'></div>
                    <div className="role-title">Exchange and wallet provider</div>
                    <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div>
                </div>
            </div>
            <div className="mainTitle d-flex justify-content-between">
                <div className="mainTitle-groups">
                    <div className="mainTitle-link d-flex justify-content-start">MAIN TITLE</div>
                    <div className="mainTitle-subject">
                        How it works
                    </div>
                    <div className="mainTile-content-1">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.</div>
                    <div className="mainTile-content-2">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.</div>
                    <div className="mainTitle-apply-btn d-flex justify-content-start"><a href='/'>APPLY NOW</a></div>
                </div>
                <div className="main-title-diagram">
                    <div className='top-diagram'></div>
                    <div className='mid-diagram d-flex justify-content-between'>
                        <div className='diagram-brand'>
                            <div className='brand-logo'></div>
                            <div className='brand-title'>Brand</div>
                        </div>
                        <div className='pair-directions'></div>
                        <div className='rotate-directions'></div>
                        <div className='pair-directions'></div>
                        <div className='diagram-user'></div>
                    </div>
                    <div className='bottom-diagram'></div>
                </div>
            </div>
        </div>
    )
}

export default PartMainTitle;