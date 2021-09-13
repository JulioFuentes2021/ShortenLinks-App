import styled, {css} from 'styled-components';

export const ConfirmButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: #13DED6;
    font-size: ${props => props.textSize};
    border-radius: .5rem;
    outline: none;
    border: none;
    color: #fff;
    margin: ${props => props.margin};
    cursor: pointer;

    &:hover {
        opacity: .9;

    }
    ${props =>
        props.isShortenIt && css`
        @media screen and (min-width:768px) {
            width: 10%;
        }
        `
    }

    ${props =>
        props.isDelete && css`
            background-color: rgb(185, 30, 30);
            color: #fff;
        `
    }

    ${props =>
        props.isCopied && css`
            padding: ${props => props.padding};
        `
    }

    @media screen and (min-width:768px) {
        margin: 0 .5rem 0 0;
    }
`