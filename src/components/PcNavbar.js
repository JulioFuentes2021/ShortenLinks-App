import React from 'react';
import { Link } from 'react-router-dom'
import {
    PcOptionsContainer,
    LinkButton,
    Header,
    Logo,
    CambiarEsto
} from '../navbar.style/Navbar.elements';

function PcNavbar(props) {
    return (
        <Header>
            <PcOptionsContainer>
                <Logo>
                    Shortly
                </Logo>
                <CambiarEsto href="#">Features</CambiarEsto>
                <CambiarEsto href="#">Pricing</CambiarEsto>
                <CambiarEsto href="#">Resources</CambiarEsto>
            </PcOptionsContainer>
            <PcOptionsContainer>
                <CambiarEsto href="#">Login</CambiarEsto>
                <LinkButton
                width={'9rem'}
                textSize={'1.4rem'}
                >
                    Sign Up
                </LinkButton>
            </PcOptionsContainer>
        </Header>
    );
}

export default PcNavbar;

