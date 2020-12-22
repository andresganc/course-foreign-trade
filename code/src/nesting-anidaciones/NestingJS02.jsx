

import React, { Fragment } from 'react'
import styled from 'styled-components'

// Button Componente-Estilo aparte y posterior mente anidado 
const Button = styled.button `
    margin: 5px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #464B4D;
    transition: 0.5s
`

const Container = styled.div `
    color: white;
    background-color: #AEBAE8;
    display: flex;
    justify-content: center;

    // Usando hover sobre div y aplicando a button
    &:hover button {
        opacity: 0.7;
    }

    // Anidando Button externo y haciendo hover
    ${Button}:hover {
        color: black;
        background-color: #fff;
    }
`;

export default function NestingJS() {
    return (
        <Container>
            <Button> Cancelar </Button>
            <Button> Enviar </Button>
        </Container>
    )
}
