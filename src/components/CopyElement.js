import React from 'react';
import styled from 'styled-components';
import { ConfirmButton } from '../GeneralComponents/ButtonWithoutRadius';
import { Context } from '../Context/index';


function CopyElement(props) {
    const {
        allCopyElements
    } = React.useContext(Context);

    return (
        <CopyElementContainer>
            <CopyElementPosition>
                <OriginalUrl>
                    {props.code}
                </OriginalUrl>
                <ShortenLinksContainer>
                    <UrlModified>
                        {props.shortLink}
                    </UrlModified>
                    <ConfirmButton
                        isCopied
                        width={'6rem'}
                        textSize={'1.5rem'}
                        height={'3rem'}
                    >
                        copy
                    </ConfirmButton>
                    <ConfirmButton
                        width={'6rem'}
                        height={'3rem'}
                        textSize={'1.5rem'}
                        isDelete
                    >
                        Delete
                    </ConfirmButton>
                </ShortenLinksContainer>
            </CopyElementPosition>
        </CopyElementContainer>
    );
}

const fontSize = "2"
const padding = "1"


const deleteUrl = styled.button`
    color: #875;
    cursor: pointer;
    font-size: 15rem;
    position: relative;
    top: 10px;
    background-color: #000;
    border: 5px solid red;
`;

const CopyElementContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 0 0 2rem 0;
`;

const CopyElementPosition = styled.article`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: .1rem .1rem .2rem 0 #bbb;
`;

const OriginalUrl = styled.span`
    color: #000;
    font-weight: 400;
    font-size: ${fontSize}rem;
    padding: ${padding}rem;
    letter-spacing: .1rem;
    line-height: 1.25;
`;

const ShortenLinksContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: ${fontSize}rem;
    padding: ${padding}rem;
`;

const UrlModified = styled.span`
    color: #13DED6;
    margin: 0 1.5rem;
`;


export default CopyElement;