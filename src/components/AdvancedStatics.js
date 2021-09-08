import React from 'react';
import styled from 'styled-components';

function AdvancedStatics(props) {
    return (
        <AdvancedStaticsContainer>
           <AdvancedStaticsTitle>
               Advanced Statics
           </AdvancedStaticsTitle>
           <AdvancedStaticsDescription>
               Track how your links are performing across the web with our advanced statics dashboard.
           </AdvancedStaticsDescription>
        </AdvancedStaticsContainer>
    );
}

export const AdvancedStaticsContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 1rem 0 4rem 0;
`;

export const AdvancedStaticsTitle = styled.span`
    font-size: 4rem;
`;

export const AdvancedStaticsDescription = styled.p`
    color: #555;
    font-weight: 500;
    font-size: 1.5rem;
`;

export default AdvancedStatics;