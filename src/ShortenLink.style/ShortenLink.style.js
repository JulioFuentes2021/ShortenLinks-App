import styled from 'styled-components';


export const ShortenLinkPosition = styled.div`
    display: flex;
    justify-content: center;
`

export const ShortenLinkContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 7rem;
    background-color: #444;
    margin: 2rem 0;
    justify-self: center;
    border-radius: .5rem;

    @media screen and (min-width:768px) {
        flex-direction: row;
        align-items: center;
        padding: 0 3rem;
        height: 10rem;
    }
`;

export const ShortenInput = styled.input`
    width: 85%;
    height: 40%;
    border: none;
    outline: none;
    padding-left: 1rem;
    margin-top: .5rem;
    border-radius: .3rem;
    font-size: 1.5rem;

    @media screen and (min-width:768px) {
        margin-top: 0;
        margin: 0 .5rem;
    }


`;

export const ShortButton = styled.button`
    height: 50%;
    width: 85%;
    
`;