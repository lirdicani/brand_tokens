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
import Footer from '../Footer';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <Router>
                <div className='App'>
                    <div className='content'>
                        <Navbar className="menu" light expand="md">
                            <NavbarBrand href='/' className="logo-title">
                                <div><img src='/assets/images/Logo-icon.svg' alt='logo' />&nbsp;&nbsp;&nbsp;&nbsp;<span>BRANDTOKENS</span></div>
                            </NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="menu-items" navbar>
                                    <NavItem><NavLink className="detail-item" href="/howitwork">HOW IT WORKS</NavLink></NavItem>
                                    <NavItem><NavLink className="detail-item" href="/brands">BRANDS</NavLink></NavItem>
                                    <NavItem><NavLink className="detail-item" href="/company">COMPANY</NavLink></NavItem>
                                    <NavItem><NavLink className="detail-item" href="/blog">BLOG</NavLink></NavItem>
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
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
    );
}

export default App;
