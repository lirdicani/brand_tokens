import React from 'react';
import { Upload } from 'antd';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Label, Input, Button } from 'reactstrap';
import { UploadOutlined } from '@ant-design/icons';


import './style.css';
import Terms from './Terms';

const fileList = [
    
];
  
const props1 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture-card',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
};

class Register extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            brandIcon: '/assets/images/brand-selected.svg',
            indiviIcon: '/assets/images/user-unselected.svg',
            checkIcon: '/assets/images/c-check.svg',
            personCheckIcon: '/assets/images/c-uncheck-person.svg',
            email_valid: true,
            phone_valid: true,
            website_valid: true,
            errorBrandName: '',
            errorCompanyName: '',
            errorCountryName: '',
            errorCityName: '',
            errorContactPerson: '',
            errorIndustry: '',
            errorDescription: '',
            errorCheckbox: '',
            terms: false,

            fields: {
                brandName: '',
                countryName: '',
                cityName: '',
                contactPerson: '',
                phoneValue: '',
                email: '',
                industry: '',
                website: '',
                description: '',
            }
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);

        this.props.changeSpecialClass('');
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    validateEmail (email) {
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePhone (phone) {
        const re = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
        return re.test(phone);
    }

    validateWebsite (website) {
        const re = /^(?!www | www\.)[A-Za-z0-9_-]+\.+[A-Za-z0-9.%&=_:;-]+$/;
        return re.test(website);
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

    setPhoneValue(e) {

        const phone_valid = this.validatePhone(e);

        this.setState({
            phone_valid: phone_valid
        });

        let fields = this.state.fields;
        fields['phoneValue'] = e;
        this.setState({fields: fields});
    }

    handleWebsiteChange(e) {
        const website = e.target.value;
        const websiteValid = this.validateWebsite(website)

        this.setState({
            website_valid: websiteValid
        });

        let fields = this.state.fields;
        fields['website'] = website;
        this.setState({fields: fields});
    }

    submitValidate(e) {
        e.preventDefault();

        let formValid = true;

        if (!this.state.fields['brandName']) {
            formValid = false;
            this.setState({errorBrandName: 'error'});
        }
        else {
            this.setState({errorBrandName: ''});
        }

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

        if (!this.state.phone_valid || !this.state.fields['phoneValue']) {
            this.setState({phone_valid: false});
            formValid = false;
        }
        else {
            this.setState({phone_valid: true});
        }

        if (!this.state.fields['industry']) {
            formValid = false;
            this.setState({errorIndustry: 'error'});
        }
        else {
            this.setState({errorIndustry: ''});
        }

        if (!this.state.website_valid || !this.state.fields['website']) {
            this.setState({website_valid: false});
            formValid = false;
        }
        else {
            this.setState({website_valid: true});
        }

        if (!this.state.fields['description']) {
            formValid = false;
            this.setState({errorDescription: 'error'});
        }
        else {
            this.setState({errorDescription: ''});
        }

        if (!this.state.terms) {

        }

        if (formValid) {
            window.location.href = 'success';
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
        let errorPhoneClass = '';
        let errorWebsiteClass = '';

        const { email_valid } = this.state;
        const { phone_valid } = this.state;
        const { website_valid } = this.state;

        if (!email_valid) {
            errorEmailClass = 'errorEmail';
        }

        if (!phone_valid) {
            errorPhoneClass = 'errorPhone';
        }

        if (!website_valid) {
            errorWebsiteClass = 'errorWebsite';
        }

        return (

            <div className='brand-register'>
                <div className='brand-register-collapse-effect'></div>
                <div className='brand-register-container'>
                    <div className='brand-register-form'>
                        <div className='d-flex justify-content-between brand-register-element responsive-brand-indivi-btn'>
                            <Button className='brand-register-btn active' onClick={this.changeBrandFocusState.bind(this)}>
                                <div className='check-icon'><img alt='check-icon'  src={this.state.checkIcon} /></div>
                                <div className='brand-icon'><img alt='brand-icon'  src={this.state.brandIcon} /></div>
                                <div className='label'><span>Brand</span></div>
                            </Button>
                            <Button className='brand-register-btn' onClick={this.changeIndiviFocusState.bind(this)}>
                                <Link to='indiviRegister'>
                                    <div className='check-icon'><img alt='check-icon'  src={this.state.personCheckIcon} /></div>
                                    <div><img className='indivi-icon' alt='indivi-icon' src={this.state.indiviIcon} /></div>
                                    <div className='label'><span>Individual</span></div>
                                </Link>
                            </Button>
                        </div>
                        <div className={'brand-register-element ' + this.state.errorBrandName}>
                            <Label >COMPANY NAME</Label>
                            <Input type='text' name="brandName" onChange={this.handleChange.bind(this, "brandName")} value={this.state.fields['brandName']} placeholder='Google, Inc.'/>
                            <p className='invalid'>Invalid COMPANY NAME</p>
                        </div>
                        <div className='brand-register-element responsive-country-city d-flex justify-content-between'>
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
                        <div className={'brand-register-element ' + this.state.errorContactPerson}>
                            <Label>CONTACT PERSON</Label>
                            <Input type='text' name='contactPerson' onChange={this.handleChange.bind(this, 'contactPerson')} value={this.state.fields['contactPerson']} placeholder='John Doe' />
                            <p className='invalid'>Invalid CONTACT PERSON</p>
                        </div>
                        <div className={'brand-register-element ' + errorEmailClass}>
                            <Label>EMAIL ADDRESS</Label>
                            <Input type='email' onChange={this.handleEmailChange} name='email' value={this.state.fields['email']} placeholder='example@domain.com'/>
                            <p className='invalid'>Invalid e-mail address</p>
                        </div>
                        <div className={'brand-register-element ' + errorPhoneClass }>
                            <Label>MOBILE / TELEPHONE</Label>
                            <PhoneInput
                                className='phone-class'
                                international
                                placeholder="+1 334 332 3434"
                                value={this.state.fields['phoneValue']}
                                onChange={this.setPhoneValue.bind(this)} required/>
                            <p className='invalid'>Invalid phone number</p>
                        </div>
                        <div className='brand-register-element d-flex justify-content-between'>
                            <div className='upload-title'>
                                <Upload {...props1}>
                                    <div className='uploadSection'>
                                        <Label className='upload-top-label'>UPLOAD YOUR COMPANY LOGO</Label>
                                        <Button className='upload-btn'>
                                            <UploadOutlined type="upload" /> UPLOAD YOUR LOGO
                                        </Button>
                                        <Label className='upload-bottom-label'>Upload high quality JPEG, JPG, PNG or PDF</Label>
                                    </div>                                    
                                </Upload>
                            </div>
                        </div>

                        <div className={'brand-register-element ' + this.state.errorIndustry}>
                            <Label>INDUSTRY</Label>
                            <Input type='text' onChange={this.handleChange.bind(this, 'industry')} name='industry' value={this.state.fields['industry']} placeholder='Saas, design, e-commerce ..etc' />
                            <p className='invalid'>Invalid INDUSTRY</p>
                        </div>
                        <div className={'brand-register-element ' + errorWebsiteClass}>
                            <Label>WEBSITE</Label>
                            <Input type='text' onChange={this.handleWebsiteChange} name='website' value={this.state.fields['website']} placeholder='https://www.example.com' />
                            <p className='invalid'>Invalid website url</p>
                        </div>
                        <div className={'brand-register-element ' + this.state.errorDescription}>
                            <Label>DESCRIPTION</Label>
                            <Input className='brand-textarea' onChange={this.handleChange.bind(this, 'description')} type="textarea" name="description" value={this.state.fields['description']} placeholder='Write a short description about your brand' />
                            <p className='invalid'>Invalid DESCRIPTION</p>
                        </div>
                        <div className={'brand-register-element ' + this.state.errorCheckbox}>
                            <Terms />
                        </div>
                        <div className='brand-register-element'>
                            <Button className='brand-register-apply' href='/success' onClick={this.submitValidate.bind(this)} >APPLY NOW</Button>
                        </div>
                    </div>
                    <div className="brand-register-title">
                        <h5>JOIN THE REVOLUTION</h5>
                        <h3>Become one of the first issuers of a brand token</h3>
                        <div className='brand-register-title-list d-flex justity-content-start align-items-start'>
                            <img src='/assets/images/c-check.svg' alt='check' />
                            <p className='brand-register-title-name'>Will become one of the first issuers of a brand token</p>
                        </div>
                        <div className='brand-register-title-list d-flex justity-content-start align-items-start'>
                            <img src='/assets/images/c-check.svg' alt='check' />
                            <p className='brand-register-title-name'>Our advisors contact with you</p>
                        </div>
                        <div className='brand-register-title-list d-flex justity-content-start align-items-start'>
                            <p className='brand-register-title-name no-icon'>LEARN MORE<Link to='/faq'><Button className='faq'>(FAQ link)</Button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;