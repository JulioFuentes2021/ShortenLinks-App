import React from 'react';
import styled from 'styled-components';

const Error = () => {
    return (
        <ErrorMessage>Page Not Found</ErrorMessage>
    );
}

const ErrorMessage = styled.span`
    font-size: 5rem;
`;

export default Error;