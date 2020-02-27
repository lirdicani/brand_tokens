import React from 'react';

import './style.css';
import PartRevolution from '../../components/PartRevolution';

class CompanyPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        };
    }

    render () {
        return (
            <div className='company-page'>
                <div className='company-collapse-effect'></div>
                <div className='join-revolution'>
                    <div className='company-title'>
                        <div className='company-top-title'>JOIN THE REVOLUTION</div>
                        <div className='company-main-title'>The future of <br /> loyalty systems</div>
                        <div className='company-article'>Blockchain convinces us that every brand can issue their token, build its value and community around it. Around your own token instead of one universal token for all.</div>
                    </div>
                    <div className='company-main-pic'><img src='/assets/images/company page/company.png' alt='company-main' /></div>
                </div>
                <div className='our-vision d-flex justify-content-center'>
                    <div className='our-vision-body'>
                        <div className='our-vision-top-title'>VISION</div>
                        <div className='our-vision-main-title'>Our vision of the future</div>
                        <div className='our-vision-subtitle'>Our vision is a new economy in which Blockchain-based companies and organizations respect consumer rights, care for consumer data and reward customers for their attention.</div>
                        <div className='our-vision-description'><i>Wouldn’t it be great if you could open a digital wallet and view the sum total of all your rewards programs for hotels, pharmacies, and bank cards, all in one place, converted into cash? Then, you could spend all those thousands of unused airline miles as dollars to buy an Apple watch or take your spouse to dinner at the corner pizzeria.</i></div>
                        <div className='our-vision-speil d-flex justify-content-end align-items-center'>
                            <span className='speil-line'></span>
                            <span className='main-speil'>Whitepaper</span>
                        </div>
                    </div>
                </div>
                <div className='office'>
                    <div className='office-clip-effect'></div>
                    <div className='office-body d-flex justify-content-between'>
                        <div className='office-title'>
                            <div className='office-top-title'>OFFICE</div>
                            <div className='office-main-title'>To keep our team productive and happy</div>
                            <div className='office-description'>we’ve created an open-concept office space that fosters collaboration, communication and creativity across all departments and teams. From thoughtful, green spaces, to team bonding activities and outings, we’re dedicated to nurturing talent, encouraging positivity, and creating room for growth.</div>
                        </div>
                        <div className='office-pic'>
                            <div className='office-left-pic'>
                                <div className='office-pic-item'><img src='/assets/images/company page/office-pic1.png' alt='office-picture0' /></div>
                                <div className='office-pic-item'><img src='/assets/images/company page/office-pic2.png' alt='office-picture1' /></div>
                                <div className='office-pic-item'><img src='/assets/images/company page/office-pic3.png' alt='office-picture2' /></div>
                            </div>
                            <div className='office-right-pic'>
                                <div className='office-pic-item'><img src='/assets/images/company page/office-pic4.png' alt='office-picture3' /></div>
                                <div className='office-pic-item'><img src='/assets/images/company page/office-pic5.png' alt='office-picture4' /></div>
                                <div className='office-pic-item'><img src='/assets/images/company page/office-pic6.png' alt='office-picture5' /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='team'>
                    <div className='team-member'>
                        <div className='team-member-top-title'>OUR TALENTS</div>
                        <div className='team-member-main-title'>Meet the team</div>
                        <div className='team-member-members'></div>
                    </div>
                    <div className='join-team'></div>
                </div>
                <PartRevolution />
            </div>
        )
    }
}

export default CompanyPage;