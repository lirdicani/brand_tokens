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
import Homepage from '../../pages/Homepage';
import Register from '../../pages/Register';
import IndiviRegister from '../../pages/Register/IndiviRegister'
import Footer from '../Footer';
import Success from '../../pages/Register/Success';
import CompanyPage from '../../pages/CompanyPage';
import ContactUs from '../../pages/ContactUs';
import BlogPage from '../../pages/BlogPage';
import BlogPostPage from '../../pages/BlogPage/BlogPostPage';
import TermsPage from '../../pages/TermsPage';
import PrivacyPolicy from '../../pages/PrivacyPolicy';

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
                                    <div><span>BRANDTOKENS</span></div>
                                    {/* <img src='/assets/images/Logo-icon.svg' alt='logo' />&nbsp;&nbsp;&nbsp;&nbsp; */}
                                </Link>
                            </div>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="menu-items" navbar>
                                    <Link className="detail-item" to="/"><NavItem id='nav-ico'>ICO</NavItem></Link>
                                    <Link className="detail-item" to="/"><NavItem>HOW IT WORKS</NavItem></Link>
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
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
    );
}

export default App;
