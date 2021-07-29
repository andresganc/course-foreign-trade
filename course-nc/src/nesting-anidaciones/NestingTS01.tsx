
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Container Component-Style y cambio del elemento button 
// desde el mismo container por medio de anidaciones  
const Container = styled.div `
    color: white;
    background-color: #AEBAE8;
    display: flex;
    justify-content: center;

    // Usando hover sobre div y aplicando a button
    &:hover button {
        opacity: 0.7;
    }

    // Style Button (& Hace referencia a elemento raiz (Container))
    & button {
        margin: 5px;
        border-radius: 5px;
        border: none;
        color: #41A34D;
        background-color: #86999E;
        transition: 0.5s
    }

    // Uso normal de hover sobre button
    & button:hover {
        color: #28632F;
        background-color: #B0C7CF;
    }
`

export default function NestingJS() {
    return (
        <Container>
            <button> Cancelar </button>
            <button> Enviar </button>
        </Container>
    )
}
