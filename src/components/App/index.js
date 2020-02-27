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

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <Router>
                <div className='App'>
                    <div className='content'>
                        <Navbar className="menu" light expand="md">
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
                                <Homepage />
                            </Route>
                            <Route exact path='/register'>
                                <Register />
                            </Route>
                            <Route exact path='/indiviRegister'>
                                <IndiviRegister />
                            </Route>
                            <Route exact path='/success'>
                                <Success />
                            </Route>
                            <Route extra path='/company'>
                                <CompanyPage />
                            </Route>
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
    );
}

export default App;
