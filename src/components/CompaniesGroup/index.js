import React from 'react';
import {
    Col,
    Row,
    Container
} from 'reactstrap';

import './style.css';

const logoes_line1 = [
    { logo_name: 'Ariatech', logoes_image: '/assets/images/parnters logo/Ariatech.png' },
    { logo_name: 'Bitcoin', logoes_image: '/assets/images/parnters logo/BITCOIN.png' },
    { logo_name: 'btc_invest_camp', logoes_image: '/assets/images/parnters logo/btc_invest_camp.png' },
    { logo_name: 'COMPARIC', logoes_image: '/assets/images/parnters logo/COMPARIC.png' },
    { logo_name: 'inret', logoes_image: '/assets/images/parnters logo/inret_consulting.png' },
    { logo_name: 'IMITLESS', logoes_image: '/assets/images/parnters logo/IMITLESS.png' },
]

const logoes_line2 = [
    { logo_name: 'invest_camp', logoes_image: 'assets/images/parnters logo/invest_camp.png' },
    { logo_name: 'Rozmus', logoes_image: '/assets/images/parnters logo/Karolina_Rozmus.png' },
    { logo_name: 'logoBFG', logoes_image: '/assets/images/parnters logo/logoBFG.png' },
    { logo_name: 'Logo-Kup-Firme', logoes_image: '/assets/images/parnters logo/Logo-Kup-Firme.png' },
    { logo_name: 'PERSONAL TOKENS', logoes_image: '/assets/images/parnters logo/PERSONAL TOKENS.png' },
    { logo_name: 'PFW', logoes_image: '/assets/images/parnters logo/PFW.png' },
]

const logoes_line3 = [
    { logo_name: 'PW-MASTER-Transport-mia', logoes_image: 'assets/images/parnters logo/PW-MASTER-Transport-mia.png' },
    { logo_name: 'SKLEP WERDKARSKI', logoes_image: 'assets/images/parnters logo/SKLEP WERDKARSKI.png' },
    { logo_name: 'smart_trader', logoes_image: '/assets/images/parnters logo/smart_trader.png' },
    { logo_name: 'SPIN', logoes_image: 'assets/images/parnters logo/SPIN.png' },
    { logo_name: 'SPRZEDAJFIRME LOGO', logoes_image: 'assets/images/parnters logo/SPRZEDAJFIRME LOGO .png' },
    { logo_name: 'sunfit-beuaty', logoes_image: 'assets/images/parnters logo/sunfit-beuaty.png' },
]

const logoes_line4 = [
    { logo_name: 'TOKENEO', logoes_image: '/assets/images/parnters logo/TOKENEO.png' },
    { logo_name: 'TOKENEO NEWS', logoes_image: '/assets/images/parnters logo/TOKENEO NEWS.png' },
    { logo_name: 'WOOCASH', logoes_image: '/assets/images/parnters logo/WOOCASH.png' },
    { logo_name: 'Zadlo', logoes_image: '/assets/images/parnters logo/Zadlo.png' },
]

const Logo = (props) => {
    return (
        <div className='company-logo d-flex justify-content-center'>
            <img height='auto' src={props.logoes_image} alt={props.logo_name} />
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
                        <div className='companiesGroup-line-3'>
                            <Row xl='6' md='3' sm='2' xs='2'>
                                {
                                    logoes_line3.map((data, i) => (
                                        <div key={i} className='spacing-group'>
                                            <Logo {...data}/>
                                        </div>
                                    ))
                                }
                            </Row>
                        </div>
                        <div className='companiesGroup-line-4'>
                            <Row xl='6' md='3' sm='2' xs='2'>
                                {
                                    logoes_line4.map((data, i) => (
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