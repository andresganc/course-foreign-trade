
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Component-Styled Button
const Button = styled.button `
    padding: 5px 10px;
    margin: 10px;
    border-radius: 4px;
    color: black;
    background-color: #5BC5DE;
    cursor: pointer;
`

// Extencion de Button- En vez de punto se usa () parqa llamar al otro componente
const ButtonWarning = styled(Button) `
    background-color: #DE6457;
    color: white;
    font-weight: bold;
`


function ExtendStylesJS() {
    return (
        <Fragment>
            <ButtonWarning> Cancelar </ButtonWarning>
            <Button> Enviar </Button>
        </Fragment>
    )
}

export default ExtendStylesJS
