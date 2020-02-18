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

import './menu.css';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
        <div>
            <Navbar className="menu" light expand="md">
                <NavbarBrand className="logo-title" href="/">BRANDTOKENS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="menu-items" navbar>
                        <NavItem><NavLink className="detail-item" href="">PRODUCT</NavLink></NavItem>
                        <NavItem><NavLink className="detail-item" href="">SOLUTIONS</NavLink></NavItem>
                        <NavItem><NavLink className="detail-item" href="">CLIENTS</NavLink></NavItem>
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