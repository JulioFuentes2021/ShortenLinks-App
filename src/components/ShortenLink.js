import React from 'react';
import {
        ShortenLinkContainer,
        ShortenInput,
        ShortenLinkPosition
        } from '../ShortenLink.style/ShortenLink.style';
import { ConfirmButton } from '../GeneralComponents/ButtonWithoutRadius';
import { Context } from '../Context/index';
import swal from 'sweetalert';

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
        const url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;
        input.value="";
        shortUrl(url)
        // swal("Link created successfully", {
        //     buttons: false,
        //     timer: 3000,
        //     icon: "success",
        //   });
        }

    }

    return (
        <ShortenLinkPosition>
            <ShortenLinkContainer onSubmit={handleLinks} >
                <ShortenInput placeholder="Shorten a Link here..." type="url" id="shortenInput" />
                <ConfirmButton
                    width={''}
                    height={'40%'}
                    textSize={'1.5rem'}
                    margin={'0 0 .5rem 0'}
                    isShortenIt
                    type="submit"
                >
                    Shorten it!
                </ConfirmButton>
            </ShortenLinkContainer>
        </ShortenLinkPosition>
    );
}

export default ShortenLink;