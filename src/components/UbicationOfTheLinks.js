import React from 'react';
import { CopyElementContainer, CopyElementPosition, OriginalUrl } from './CopyElement';

const UbicationOfTheLinks = (props) => {
    return (
        <CopyElementContainer>
            <CopyElementPosition>
                <OriginalUrl>
                    {props.instructions}
                </OriginalUrl>
            </CopyElementPosition>
        </CopyElementContainer>
    );
}

export default UbicationOfTheLinks;