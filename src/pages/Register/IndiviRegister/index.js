import React  from 'react';

import { 
    Button,
    Label,
    Input,
} from 'reactstrap';

import {
    Link,
}
from 'react-router-dom';

import './style.css';
import Terms from '../Terms';

const tags_lists = [
    { tag: 'Exchange'},
    { tag: 'Sell'},
    { tag: 'Earn'},
    { tag: 'Spend'},
    { tag: 'Get'},
    { tag: 'Play'},
    { tag: 'Collect'},
    { tag: 'Gain'},
]

class IndiviRegister extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            brandIcon: '/assets/images/brand-unselected.svg',
            indiviIcon: '/assets/images/user-selected.svg',
            checkIcon: '/assets/images/c-uncheck.svg',
            personCheckIcon: '/assets/images/c-check-person.svg',
            email_valid: true,
            errorCountryName: '',
            errorCityName: '',
            errorContactPerson: '',
            errorTerms: '',

            fields: {
                countryName: '',
                cityName: '',
                contactPerson: '',
                email: '',
                terms: false,
            }
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    validateEmail (email) {
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields: fields});
    }
      
    handleEmailChange(e) {
        const email = e.target.value;
        const emailValid = this.validateEmail(email);

        this.setState({
            email_valid: emailValid
        });

        let fields = this.state.fields;
        fields['email'] = email;
        this.setState({fields: fields});
    }

    submitValidate(e) {
        e.preventDefault();

        let formValid = true;

        if (!this.state.fields['countryName']) {
            formValid = false;
            this.setState({errorCountryName: 'error'});
        }
        else {
            this.setState({errorCountryName: ''});
        }

        if (!this.state.fields['cityName']) {
            formValid = false;
            this.setState({errorCityName: 'error'});
        }
        else {
            this.setState({errorCityName: ''});
        }

        if (!this.state.fields['contactPerson']) {
            formValid = false;
            this.setState({errorContactPerson: 'error'});
        }
        else {
            this.setState({errorContactPerson: ''});
        }

        if (!this.state.email_valid || !this.state.fields['email']) {
            this.setState({email_valid: false});
            formValid = false;
        }
        else {
            this.setState({email_valid: true});
        }

        if (!this.state.fields['terms']) {
            //formValid = false;
        }

        if (formValid) {
            alert('valid success');
        }
        else {
            alert('valid failure');
        }
    }

    changeBrandFocusState() {
        this.setState ({
            brandIcon: '/assets/images/brand-selected.svg',
            indiviIcon: '/assets/images/user-unselected.svg',
            checkIcon: '/assets/images/c-check.svg',
            personCheckIcon: '/assets/images/c-uncheck-person.svg'
        });
    }

    changeIndiviFocusState() {
        this.setState({
            brandIcon: '/assets/images/brand-unselected.svg',
            indiviIcon: '/assets/images/user-selected.svg',
            personCheckIcon: '/assets/images/c-check-person.svg',
            checkIcon: '/assets/images/c-uncheck.svg',
        });
    }

    render () {

        let errorEmailClass = '';

        const { email_valid } = this.state;

        if (!email_valid) {
            errorEmailClass = 'errorEmail';
        }

        return (

            <div className='indivi-register'>
                <div className='indivi-register-collapse-effect'></div>
                <div className='indivi-register-container'>
                    <div className='indivi-register-form'>
                        <div className='d-flex justify-content-between indivi-register-element responsive-brand-indivi-btn'>
                            
                                <Button className='indivi-register-btn' onClick={this.changeBrandFocusState.bind(this)}>
                                    <Link to="/register">
                                        <div className='check-icon'><img alt='check-icon'  src={this.state.checkIcon} /></div>
                                        <div className='brand-icon'><img alt='brand-icon'  src={this.state.brandIcon} /></div>
                                    </Link>
                                </Button>
                            
                            <Button className='indivi-register-btn' onClick={this.changeIndiviFocusState.bind(this)}>
                                <div className='check-icon'><img alt='check-icon'  src={this.state.personCheckIcon} /></div>
                                <div><img className='indivi-icon' alt='indivi-icon' src={this.state.indiviIcon} /></div>
                            </Button>
                        </div>
                        <div className={'indivi-register-element ' + this.state.errorContactPerson}>
                            <Label>CONTACT PERSON</Label>
                            <Input type='text' name='contactPerson' onChange={this.handleChange.bind(this, 'contactPerson')} value={this.state.fields['contactPerson']} placeholder='John Doe' />
                            <p className='invalid'>Invalid CONTACT PERSON</p>
                        </div>
                        <div className='indivi-register-element responsive-country-city d-flex justify-content-between'>
                            <div className={'brand-position-input-country ' + this.state.errorCountryName}>
                                <Label>COUNTRY</Label>
                                <Input type='text' name='countryName' onChange={this.handleChange.bind(this, "countryName")} value={this.state.fields['countryName']} placeholder='Your country'/>
                                <p className='invalid'>Invalid COUNTRY</p>
                            </div>
                            <div className={'brand-position-input-city ' + this.state.errorCityName}>
                                <Label>CITY</Label>
                                <Input type='text' name='cityName' onChange={this.handleChange.bind(this, 'cityName')} value={this.state.fields['cityName']} placeholder='Your city' />
                                <p className='invalid'>Invalid CITY</p>
                            </div>
                        </div>
                        <div className={'indivi-register-element ' + errorEmailClass}>
                            <Label>EMAIL ADDRESS</Label>
                            <Input type='email' onChange={this.handleEmailChange} name='email' value={this.state.fields['email']} placeholder='example@domain.com'/>
                            <p className='invalid'>Invalid e-mail address</p>
                        </div>
                        <div className='indivi-register-element'>
                            <Terms />
                        </div>
                        <div className='indivi-register-element'>
                            <Button className='indivi-register-apply' href='/success' onClick={this.submitValidate.bind(this)} >NOTIFY ME</Button>
                        </div>
                    </div>
                    <div className="indivi-register-title">
                        <h5>JOIN THE REVOLUSTION</h5>
                        <h3>Do your shopping, gets rewards</h3>
                        <Tags />
                        <div className='indivi-register-title-list d-flex justity-content-start align-items-start'>
                            <img src='/assets/images/c-check.svg' alt='check' />
                            <p className='indivi-register-title-name'>Be the first to know</p>
                        </div>
                        <div className='indivi-register-title-list d-flex justity-content-start align-items-start'>
                            <img src='/assets/images/c-check.svg' alt='check' />
                            <p className='indivi-register-title-name'>Invite your friends</p>
                        </div>
                        <div className='indivi-register-title-list d-flex justity-content-start align-items-start'>
                            <img src='/assets/images/c-check.svg' alt='check' />
                            <p className='indivi-register-title-name'>Claim your free tokens as soon as we are ready</p>
                        </div>
                        <div className='indivi-register-title-list d-flex justity-content-start align-items-start'>
                            <p className='indivi-register-title-name learnMore'><a href='/'>LEARN MORE</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Tags = () => {
    return (
        <div className='rewards-tag-group d-flex justify-content-start flex-wrap'>
            {
                tags_lists.map((data, i) =>
                    <div key={i} className='reward-tag'>{data.tag}</div>
                )
            }
        </div>
    );
}

export default IndiviRegister;