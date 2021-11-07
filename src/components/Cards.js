import React from 'react';
import {
        Card,
        ImageCard,
        TitleCard,
        TextCard
        } from '../Cards.style/Cards.style'
import { useInView } from 'react-intersection-observer';
import '../App.css'

function Cards(props) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
      });

    return (
        <>
            <Card ref={ref} className={inView ? 'show':'NotShow'}>
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