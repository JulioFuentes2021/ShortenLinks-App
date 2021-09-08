import React from 'react';
import {
        ShortenLinkContainer,
        ShortenInput,
        ShortenLinkPosition
        } from '../ShortenLink.style/ShortenLink.style';
import { ConfirmButton } from '../GeneralComponents/ButtonWithoutRadius';

function ShortenLink() {
    return (
        <ShortenLinkPosition>
            <ShortenLinkContainer>
                <ShortenInput placeholder="Shorten a Link here..." type="email">
                    
                </ShortenInput>
                <ConfirmButton
                    width={'85%'}
                    height={'40%'}
                    textSize={'1rem'}
                    margin={'0 0 .5rem 0'}
                    isShortenIt
                    type="submit"
                >
                    Shorten It!
                </ConfirmButton>
            </ShortenLinkContainer>
        </ShortenLinkPosition>
    );
}

export default ShortenLink;