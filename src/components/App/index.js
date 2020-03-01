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
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    let [specialClass, changeSpecialClass] = useState('');
    
    const toggle = () => setIsOpen(!isOpen);

    return (
            <Router>
                <div className='App'>
                    <div className='content'>
                        <Navbar className={"menu " + specialClass} light expand="md">
                            <Link className="logo-title" to='/'>
                                <div><img src='/assets/images/Logo-icon.svg' alt='logo' />&nbsp;&nbsp;&nbsp;&nbsp;<span>BRANDTOKENS</span></div>
                            </Link>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="menu-items" navbar>
                                    <Link className="detail-item" to="/howitwork"><NavItem id='nav-ico'>ICO</NavItem></Link>
                                    <Link className="detail-item" to="/howitwork"><NavItem>HOW IT WORKS</NavItem></Link>
                                    <Link className="detail-item" to="/brands"><NavItem>BRANDS</NavItem></Link>
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
                            <Router extra path='/contactus'>
                                <ContactUs changeSpecialClass={changeSpecialClass.bind(this)} />
                            </Router>
                            <Router exact path='/blog'>
                                <BlogPage changeSpecialClass={changeSpecialClass.bind(this)} />
                            </Router>
                            <Router exact path='/blogpost'>
                                <BlogPostPage changeSpecialClass={changeSpecialClass.bind(this)} />
                            </Router>
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
    );
}

export default App;
