import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../navbar.style/Navbar.elements';

function Boost(props) {
    return (
        <BoostContainer>
            <BoostTitle>
                Boost your links today
            </BoostTitle>
            <LinkButton
                width={'15rem'}
                height={'6rem'}
                textSize={'1.5rem'}
                padding={'2.5rem'}
            >
                Get Started
            </LinkButton>
        </BoostContainer>
    );
}

export const BoostContainer = styled.article`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #444;
    margin-top: 6rem;
`;

export const BoostTitle = styled.span`
    color: #fff;
    font-weight: bolder;
    font-size: 2.5rem;
    padding: 2rem;
`;

export default Boost;