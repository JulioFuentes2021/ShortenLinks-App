import React from 'react';
import styled from 'styled-components';

function Line(props) {
    return (
        <>
            <LineComponent/>
        </>
    );
}
//Antes de eliminar la linea crea una etiqueta con la linea y sin las linea, la segunda sera la final
const LineComponent = styled.div`
    width: .5rem;
    height: 100%;
    background-color: #13DED6;
    position: absolute;
    z-index: 0;

    @media screen and (min-width: 768px) {
        width: 90%;
        height: 1rem;
    }
`;

export default Line;