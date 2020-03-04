import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
}
from 'react-router-dom';
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
import Register from '../../pages/Register';
import Homepage from '../../pages/Homepage';
import BlogPage from '../../pages/BlogPage';
import ContactUs from '../../pages/ContactUs';
import TermsPage from '../../pages/TermsPage';
import CompanyPage from '../../pages/CompanyPage';
import Success from '../../pages/Register/Success';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import BlogPostPage from '../../pages/BlogPage/BlogPostPage';
import IndiviRegister from '../../pages/Register/IndiviRegister'
import FAQ from '../../pages/FAQ';


const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    let [specialClass, changeSpecialClass] = useState('');
    
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
                                    <Link className="detail-item" to="/"><NavItem id='nav-ico'>ICO</NavItem></Link>
                                    <Link className="detail-item" to="/flip"><NavItem>HOW IT WORKS</NavItem></Link>
                                    <Link className="detail-item" to="/"><NavItem>BRANDS</NavItem></Link>
                                    <Link className="detail-item" to='/company' ><NavItem>COMPANY</NavItem></Link>
                                    <Link className="detail-item" to="/blog"><NavItem>BLOG</NavItem></Link>
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
