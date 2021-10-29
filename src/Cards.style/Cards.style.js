import styled, { css } from 'styled-components';

export const CardsPosition = styled.div`
    display: flex;
    justify-content: center;
`;

export const CardsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Card  = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;
    /* height: 17rem; */
    position: relative;
    z-index: 20;

    @media screen and (min-width: 768px) {
        width: 30%;
    }

    @media screen and (min-width: 1024px) {
        height: 20rem;
    }

    ${props => 
        props.isSecond && css`
            @media screen and (min-width:768px) {
                transform: translateY(2rem);
                background-color: red;
            }
        `
    }


`;

export const ImageCard= styled.div`
    position: relative;
    top: -2rem;
    z-index: 20;
    background-color: #060721;
    border-radius: 3rem;


    img {
        width: 4rem;
        height: 4rem;
        border-radius: 3rem;
    }
`;

export const TitleCard = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 .5rem 0;
    font-size: 1.7rem;
    text-align: center;
`;

export const TextCard = styled.p`
    color: #555;
    font-weight: 500;
    text-align: center;
    margin: 0 0 1.5rem 0;
    padding: .5rem;
    font-size: 1.5rem;
`;