import React from 'react';
import styled from 'styled-components';

function Line(props) {
    return (
        <>
            <LineComponent/>
        </>
    );
}

const LineContainer = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        background-color:green;
    }
`;

const LineComponent = styled.div`
    width: .5rem;
    height: 70%;
    background-color: #13DED6;
    position: absolute;
    z-index: 0;

    @media screen and (min-width: 768px) {
        width: 90%;
        height: 1rem;
    }
`;

export default Line;