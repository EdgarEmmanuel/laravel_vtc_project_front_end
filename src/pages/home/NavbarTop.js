import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

import "./css/navbarTop.css";



function NavbarTop(args){

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
        <div id="navbar_top">
            <Navbar {...args}>
                <NavbarBrand href="/">VTC | APP</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">A Propos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#passenger">Passagers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/driver">Chauffeurs</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Inscription
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Passager</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Chauffeur</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default NavbarTop;