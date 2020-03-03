import React from 'react';
import { Label, Button, Input } from 'reactstrap';

import './style.css';

class ContactUs extends React.Component {

    constructor (props) {
        super (props);
        
        this.state = {
            validEmail: true,
            validWebsite: true,
            errorContactName: '',
            errorContactCountry: '',
            errorContactAnything: '',
            fields: {
                contactCountry: '',
                contactName: '',
                contactAnything: '',
                contactEmail: '',
                contactWebsite: '',
            }
        }

        this.props.changeSpecialClass('');
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    validateEmail (email) {
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateWebsite (website) {
        const re = /((([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z@_-]+))?(\?[0-9a-zA-Z@&\];=_-]+)?)?))\b/;
        return re.test(website);
    }

    handleChangeEmail(e) {
        const email = e.target.value;
        const valid_email = this.validateEmail(email);
        
        this.setState({
            validEmail: valid_email
        });

        let fields = this.state.fields;
        fields['contactEmail'] = email;
        this.setState({fields: fields});
    }

    handleChangeWebsite(e) {
        const website = e.target.value;
        const valid_website = this.validateWebsite(website);
        
        this.setState({
            validWebsite: valid_website
        });

        let fields = this.state.fields;
        fields['contactWebsite'] = website;
        this.setState({fields: fields});
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields: fields});
    }

    submitValidate(e) {
        e.preventDefault();

        let formValid = true;

        if (!this.state.fields['contactName']) {
            formValid = false;
            this.setState({errorContactName: 'error'});
        }
        else {
            this.setState({errorContactName: ''});
        }

        if (!this.state.validEmail || !this.state.fields['contactEmail']) {
            this.setState({validEmail: false});
            formValid = false;
        }
        else {
            this.setState({validEmail: true});
        }

        if (!this.state.validWebsite || !this.state.fields['contactWebsite']) {
            this.setState({validWebsite: false});
            formValid = false;
        }
        else {
            this.setState({validWebsite: true});
        }

        if (!this.state.fields['contactCountry']) {
            formValid = false;
            this.setState({errorContactCountry: 'error'});
        }
        else {
            this.setState({errorContactCountry: ''});
        }

        if (!this.state.fields['contactAnything']) {
            formValid = false;
            this.setState({errorContactAnything: 'error'});
        }
        else {
            this.setState({errorContactAnything: ''});
        }

        if (formValid) {
            window.location.href = '/success'; 
        }
        else {
            alert('valid failure');
        }
    }

    render () {

        let errorContactEmail = '';
        let errorContactWebsite = '';
        
        if (!this.state.validEmail) {
            errorContactEmail = 'errorContactEmail';
        }

        if (!this.state.validWebsite) {
            errorContactWebsite = 'errorContactWebsite';
        }

        return (
            <div className='contact-us d-flex justify-content-between'>
                <div className='contact-us-clip-effect'></div>
                <div className='contact-us-title'>
                    <div className='contact-us-main-tile'>
                        <div className='contact-us-main-top-title'>CONTACT US</div>
                        <div className='contact-us-sub-title'>Our team is happy to answer your questions</div>
                        <div className='contact-us-article'>Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.</div>
                    </div>
                    <div className='general-communication-title'>
                        <div className='general-communication-icon'><img src='/assets/images/language.svg' alt='language' /></div>
                        <div className='general-communication-main-title'>General communication</div>
                        <div className='general-communication-sub-title'>For general questions, partnership opportunities, please email <a className='brand-token-email' href='/'>contact@brandtokens.io</a></div>
                    </div>
                </div>
                <div className='contact-us-container'>
                    <div className='contact-us-form'>
                        <div className={'contact-us-form-element ' + this.state.errorContactName}>
                            <div className='d-flex justify-content-between contact-name '>
                                <Label className='contact-us-form-label'>Your full name</Label>
                                <Input className='contact-us-form-input' type='text' name='contactName' onChange={this.handleChange.bind(this, 'contactName')} value={this.state.fields['contactName']} placeholder='Jone Doe' />
                            </div>
                            <span><i>Invalid Your name</i></span>
                        </div>
                        <div className={'contact-us-form-element ' + errorContactEmail}>
                            <div className='d-flex justify-content-between contact-email'>
                                <Label className='contact-us-form-label'>Your email address</Label>
                                <Input className='contact-us-form-input' type='text' name='contactEmail' onChange={this.handleChangeEmail.bind(this)} value={this.state.fields['contactEmail']} placeholder='johne-doe@example.com' />
                            </div>
                            <i><span>Invalid Your email address</span></i>
                        </div>
                        <div className={'contact-us-form-element ' + errorContactWebsite}>
                            <div className='d-flex justify-content-between '>
                                <Label className='contact-us-form-label'>Company website</Label>
                                <Input className='contact-us-form-input' name='contactWebsite' onChange={this.handleChangeWebsite.bind(this)} value={this.state.fields['contactWebsite']} type='text' placeholder='www.example.com'/>
                            </div>
                            <span><i>Invalid your website url</i></span>
                        </div>
                        <div className={'contact-us-form-element ' + this.state.errorContactCountry}>
                            <div className='d-flex justify-content-between '>
                                <Label className='contact-us-form-label'>Country</Label>
                                <Input className='contact-us-form-input' type='text' name='contactCountry' onChange={this.handleChange.bind(this, 'contactCountry')} value={this.state.fields['contactCountry']} placeholder='Select your country' />
                            </div>
                            <span><i>Invalid your Country</i></span>
                        </div>
                        <div className={'contact-us-form-element ' + this.state.errorContactAnything}>
                            <div className='d-flex justify-content-between align-items-start'>
                                <Label className='contact-us-form-label'>Anything else?</Label>
                                <textarea className='contact-us-form-input contact-text-area' type='text' name='contactAnything' onChange={this.handleChange.bind(this, 'contactAnything')} value={this.state.fields['contactAnything']} placeholder='Tell us about yourself, needs, and whatever you want us to know' />
                            </div>
                            <span><i>Invalid your anything</i></span>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Button className='contact-us-btn brand-register-apply' onClick={this.submitValidate.bind(this)} >APPLY NOW</Button>
                        </div>
                    </div>
                </div>
                <div className='contact-us-right-pic-group'></div>
            </div>
        );
    }
}

export default ContactUs;