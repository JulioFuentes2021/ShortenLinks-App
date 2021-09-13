import React from 'react';
import {
        ShortenLinkContainer,
        ShortenInput,
        ShortenLinkPosition
        } from '../ShortenLink.style/ShortenLink.style';
import { ConfirmButton } from '../GeneralComponents/ButtonWithoutRadius';
import { Context } from '../Context/index';

function ShortenLink() {

    const [links,setLinks] = React.useState();


    const {
        shortUrl,
    } = React.useContext(Context)

    const handleLinks = (e) => {
        e.preventDefault()
        const input = document.getElementById('shortenInput');
        if (!input.value.length) {
            console.log('Input vacio')
        } else {
            setLinks(input.value)
            console.log('aaaaaaaaaaaaaaaaaaa',links)
        const url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;
        input.value="";
        shortUrl(url)
        }
    }

    

    return (
        <ShortenLinkPosition>
            <ShortenLinkContainer onSubmit={handleLinks} >
                <ShortenInput placeholder="Shorten a Link here..." type="url" id="shortenInput">
                    
                </ShortenInput>
                <ConfirmButton
                    width={'85%'}
                    height={'40%'}
                    textSize={'1.5rem'}
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