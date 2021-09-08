import React from 'react';
import {
        Card,
        ImageCard,
        TitleCard,
        TextCard
        } from '../Cards.style/Cards.style'

function Cards(props) {
    return (
        <>
            <Card>
                <ImageCard>
                    <img src={props.image} alt={props.alt} />
                </ImageCard>
                <TitleCard>
                    {props.title}
                </TitleCard>
                <TextCard>
                    { props.contentCard }
                </TextCard>
            </Card>
        </>
    );
}

export default Cards;