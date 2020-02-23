import React from 'react';
import {
    Col,
    Row,
    Container
} from 'reactstrap';

import './part_companies_group.css';

const logoes_line1 = [
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
]

const logoes_line2 = [
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
    { logo_name: 'skype', logoes_image: '/assets/images/slack.svg' },
]


const Logo = (props) => {
    return (
        <div className='company-logo d-flex justify-content-center'>
            <img height='100%' src={props.logoes_image} alt={props.logo_name} />
        </div>
    )
}

class CompaniesGroup extends React.Component {
    render() {
        return(
            <div className='companiesGroup'>
                <Container>
                    <Col>                        
                        <div className='companiesGroup-line-1'>
                            <Row xl='6' md='3' sm='2' xs='2'>
                                {
                                    logoes_line1.map((data, i) => (
                                        <div key={i} className='spacing-group'>
                                            <Logo {...data}/>
                                        </div>
                                    ))
                                }
                            </Row>
                        </div>
                        <div className='companiesGroup-line-2'>
                            <Row xl='6' md='3' sm='2' xs='2'>
                                {
                                    logoes_line2.map((data, i) => (
                                        <div key={i} className='spacing-group'>
                                            <Logo {...data}/>
                                        </div>
                                    ))
                                }
                            </Row>
                        </div>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default CompaniesGroup;