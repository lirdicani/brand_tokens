import React, { useState } from 'react';
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

import  './menu.css';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
        <div>
            <Navbar className="menu" light expand="md">
                <NavbarBrand className="logo-title" href="/">
                    <div><img src='/assets/images/Logo-icon.svg' alt='logo' />&nbsp;&nbsp;&nbsp;<span>BRANDTOKENS</span></div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="menu-items" navbar>
                        <NavItem><NavLink className="detail-item" href="">HOW IT WORKS</NavLink></NavItem>
                        <NavItem><NavLink className="detail-item" href="">BRANDS</NavLink></NavItem>
                        <NavItem><NavLink className="detail-item" href="">COMPANY</NavLink></NavItem>
                        <NavItem><NavLink className="detail-item" href="">BLOG</NavLink></NavItem>
                    </Nav>
                </Collapse>
                <Button className="apply-btn"><span>APPLY NOW</span></Button>
            </Navbar>
        </div>
  );
}

export default Menu;