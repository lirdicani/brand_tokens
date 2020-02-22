import React from 'react';

import './part_mainTitle.css';
import { ReactComponent as Shop } from '../../images/shop.svg';
import { ReactComponent as Loan } from '../../images/loan.svg';
import { ReactComponent as Radar } from '../../images/radar.svg';
import { ReactComponent as Repeat } from '../../images/repeat.svg';
import { ReactComponent as PChart } from '../../images/p-chart.svg';
import { ReactComponent as Replace } from '../../images/replace.svg';
import { ReactComponent as UsersWm } from '../../images/users-wm.svg';
import { ReactComponent as BrandSelected } from '../../images/brand-selected.svg';
import { ReactComponent as CornerTopRight } from '../../images/corner-top-right.svg';

const PartMainTitle = () => {
    return (
        <div className="partMainTitle">
            <div className="role-list d-flex justify-content-between">
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'><CornerTopRight /></div>
                    <div className="role-title">Brand Token issuing</div>
                    {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                </div>
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'><Radar /></div>
                    <div className="role-title">Token marketing automation</div>
                    {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                </div>
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'><PChart /></div>
                    <div className="role-title">Unique data insight</div>
                    {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                </div>
                <div className='role-list-item d-flex align-items-start flex-column'>
                    <div className='role-icon'><Replace /></div>
                    <div className="role-title">Exchange and wallet provider</div>
                    {/* <div className="role-content mt-auto">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus.</div> */}
                </div>
            </div>
            <div className="mainTitle d-flex justify-content-between">
                <div className="mainTitle-groups">
                    <div className="mainTitle-link d-flex justify-content-start">MAIN TITLE</div>
                    <div className="mainTitle-subject">
                        How it works
                    </div>
                    <div className="mainTile-content-1">Brand Tokens platform allows issuing brand loyalty tokens on the Blockchain. Unlike loyalty points, tokens are valued in real-time and can be traded and transferred between users. Brands can reward their clients, just like with points, but users can exchange them for cryptocurrencies like Bitcoin or Ethereum. Tokens can also be redeemed for discounts, products or services of the issuer or any other partner of the platform. Brands can use their tokens to acquire new customers or reward loyal clients for purchases, engagement in social media, participation in events or sharing their personal data.</div>
                    {/* <div className="mainTile-content-2">Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.</div> */}
                    <div className="mainTitle-apply-btn d-flex justify-content-start"><a href='/'>APPLY NOW</a></div>
                </div>
                <div className="main-title-diagram">
                    <div className='top-diagram d-flex justify-content-center'>
                        <div className='shop-symbol-group'>
                            <div className="shop-symbol"><Shop className='shop-symbol-icon' /></div>
                            <div className='shop-name'>Shop</div>
                        </div>
                    </div>
                    <div className='mid-diagram d-flex justify-content-between'>
                        <div className='diagram-brand'>
                            <div className='brand-logo'><BrandSelected /></div>
                            <div className='brand-title'>Brand</div>
                        </div>
                        <div className='pair-directions'></div>
                        <div className='rotate-directions d-flex justify-content-center align-items-center'>
                            <div><Repeat /></div>
                        </div>
                        <div className='pair-directions'></div>
                        <div className='diagram-user'>
                            <div className='user-logo'><UsersWm /></div>
                            <div className='user-title'>User</div>
                        </div>
                    </div>
                    <div className='bottom-diagram d-flex justify-content-center align-items-end'>
                        <div className='shop-symbol-group'>
                            <div className='shop-name'>Earn </div>
                            <div className="shop-symbol"><Loan className='shop-symbol-icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartMainTitle;