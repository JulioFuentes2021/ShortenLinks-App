import styled from 'styled-components';

export const HeaderPresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: center;
    }
`

export const HeaderImage = styled.article`
    padding: 4rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const HeaderInformation = styled.article`
    text-align: center;
    padding: 0 3rem;

    p {
        color: #555;
        margin: 0 0 1.5rem 0;
        font-weight: 600;
    }
    h1 {
        font-size: 3rem;
        font-weight: 800;
        color: #333;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;