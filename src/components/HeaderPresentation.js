import React from 'react';
import {
        HeaderImage,
        HeaderInformation,
        HeaderPresentationContainer
        } from '../HeaderPresentation.style/HeaderPresentation.style';
import Image from '../images/header_image.svg';
import { LinkButton } from '../navbar.style/Navbar.elements';

function HeaderPresentation(props) {
    return (
        <HeaderPresentationContainer>
            <HeaderImage>
                <img src={Image} alt="Header Image" />
            </HeaderImage>
            <HeaderInformation>
                <h1>More than just shorter links</h1>
                <p>Build your brand´s recognition and got detailed insights on how your links are performing</p>

                <LinkButton
                    width={'15rem'}
                    textSize={'1.8rem'}
                >
                    Get Started
                </LinkButton>
            </HeaderInformation>
        </HeaderPresentationContainer>
    );
}

export default HeaderPresentation;