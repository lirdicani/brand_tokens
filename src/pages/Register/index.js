import React from 'react';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Label, Input, Button } from 'reactstrap';


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
            errorTerms: '',

            fields: {
                brandName: '',
                countryName: '',
                cityName: '',
                contactPerson: '',
                email: '',
                phone: '',
                industry: '',
                website: '',
                description: '',
                terms: false,
            }
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    }

    validateEmail (email) {
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePhone (phone) {
        const re = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
        return re.test(phone);
    }

    validateWebsite (website) {
        const re = /(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z@_-]+))?(\?[0-9a-zA-Z@&\];=_-]+)?)?))\b/;
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

    handlePhoneChange(e) {
        const phone = e.target.value;
        const phoneValid = this.validatePhone(phone);

        this.setState({
            phone_valid: phoneValid
        });

        let fields = this.state.fields;
        fields['phone'] = phone;
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

        if (!this.state.phone_valid || !this.state.fields['phone']) {
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
                            <Button className='brand-register-btn' onClick={this.changeBrandFocusState.bind(this)}>
                                <div className='check-icon'><img alt='check-icon'  src={this.state.checkIcon} /></div>
                                <div className='brand-icon'><img alt='brand-icon'  src={this.state.brandIcon} /></div>
                            </Button>
                            
                                <Button className='indivi-register-btn' onClick={this.changeIndiviFocusState.bind(this)}>
                                    <Link to='indiviRegister'>
                                        <div className='check-icon'><img alt='check-icon'  src={this.state.personCheckIcon} /></div>
                                        <div><img className='indivi-icon' alt='indivi-icon' src={this.state.indiviIcon} /></div>
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
                            <Input onChange={this.handlePhoneChange} type='text' name='phone' value={this.state.fields['phone']} placeholder='(123) 456-7890 | 123-456-7890' />
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
                        <div className='brand-register-element'>
                            <Terms />
                        </div>
                        <div className='brand-register-element'>
                            <Button className='brand-register-apply' href='/success' onClick={this.submitValidate.bind(this)} >APPLY NOW</Button>
                        </div>
                    </div>
                    {/* <div className='brand-register-title'>
                        <h5>JOIN THE REVOLUSTION</h5>
                        <h3>Become one of the <br /> first issuers of a<br /> brand token</h3>
                        <p>Our advisors contact with you</p>
                        <a href='#a'>LEARN MORE</a>
                    </div> */}
                    <div className="brand-register-title">
                        <h5>JOIN THE REVOLUSTION</h5>
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
                            <p className='brand-register-title-name no-icon'><a href='/'>LEARN MORE</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;