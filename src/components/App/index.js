import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

import  './style.css';
import Footer from '../Footer';
import FAQ from '../../pages/FAQ';
import Register from '../../pages/Register';
import Homepage from '../../pages/Homepage';
import BlogPage from '../../pages/BlogPage';
import ContactUs from '../../pages/ContactUs';
import TermsPage from '../../pages/TermsPage';
import CompanyPage from '../../pages/CompanyPage';
import Success from '../../pages/Register/Success';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import BlogPostPage from '../../pages/BlogPage/BlogPostPage';
import IndiviRegister from '../../pages/Register/IndiviRegister';


const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [specialClass, changeSpecialClass] = useState('');
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <div className='App'>
                <div className='content'>
                    <Navbar className={"menu " + specialClass} light expand="md">
                        <div className='brand-mark'>
                            <Link className="logo-title" to='/'>
                                <div><img src='/assets/images/Logo-icon.svg' alt='logo' />&nbsp;&nbsp;&nbsp;&nbsp;<span>BRANDTOKENS</span></div>
                            </Link>
                        </div>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="menu-items" navbar>
                                <HashLink className="detail-item" to="/"><NavItem id='nav-ico'>ICO</NavItem></HashLink>
                                <HashLink className="detail-item" to='/#howitworks'><NavItem>HOW IT WORKS</NavItem></HashLink>
                                <HashLink className="detail-item" to="/#brands"><NavItem>BRANDS</NavItem></HashLink>
                                <HashLink className="detail-item" to='/company' ><NavItem>COMPANY</NavItem></HashLink>
                                <HashLink className="detail-item" to="/blog"><NavItem>BLOG</NavItem></HashLink>
                            </Nav>
                        </Collapse>
                        <Link to="/register"><Button type='submit' className="apply-btn"><span>APPLY NOW</span></Button></Link>
                    </Navbar>

                    <Switch>
                        <Route exact path='/'>
                            <Homepage changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/register'>
                            <Register changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/indiviRegister'>
                            <IndiviRegister changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/success'>
                            <Success changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route extra path='/company'>
                            <CompanyPage changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route extra path='/contactus'>
                            <ContactUs changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/blog'>
                            <BlogPage changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/blogpost'>
                            <BlogPostPage changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/termspage'>
                            <TermsPage changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/privacypolicy'>
                            <PrivacyPolicy changeSpecialClass={changeSpecialClass.bind(this)} />
                        </Route>
                        <Route exact path='/faq'>
                            <FAQ changeSpecialClass={changeSpecialClass.bind(this)}></FAQ>
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
