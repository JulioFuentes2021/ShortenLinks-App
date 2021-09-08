import React from 'react';
import {
        Logo,
        NavbarContainer,
        NavMobileIcon,
        } from '../navbar.style/Navbar.elements';

function Navbar(props) {
    return (
        <NavbarContainer>
            <Logo>
                Shortly
            </Logo>
            <NavMobileIcon>
                <i className="fas fa-bars"></i>
            </NavMobileIcon>
        </NavbarContainer>
    );
}

export default Navbar;