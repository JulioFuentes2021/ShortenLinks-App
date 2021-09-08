import styled, {css} from 'styled-components';

export const FooterContainer = styled.section`
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        color: #fff;
        font-weight: bolder;
    }

    h5 {
        color: #ddd;
    }

    @media screen and (min-width:768px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }
`;

export const FooterInformationContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${props => 
        props.isSocialMediaContainer && css`
            flex-direction: row;

        `
    }
`;

export const FooterTitle = styled.span`
    font-size: 2.5rem;
    margin: 2rem 0;
`;

export const FooterTitleItem = styled.span`
    font-size: 1.5rem;
    margin: 1.5rem 0;
`;

export const FooterItem = styled.h5`
    margin: 1rem 0;
    font-size: 1.1rem;
    color: #ddd;
    line-height: 1.625;
    font-weight: 100;

    ${props => 
        props.isSocialMediaItem && css`
            margin: 0 .8rem;
            font-size: 2rem;
        `
    }
`;
