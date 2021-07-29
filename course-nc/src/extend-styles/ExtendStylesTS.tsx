
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Component-Styled Button
const Button = styled.button `
    padding: 5px 10px;
    margin: 10px;
    border-radius: 8px;
    color: black;
    background-color: #DCE7FA;
    cursor: pointer;
`

// Extencion de Button- En vez de punto se usa () parqa llamar al otro componente
const ButtonWarning = styled(Button) `
    background-color: #DE6457;
    color: white;
    font-weight: bold;
`


function ExtendStylesTS() {
    return (
        <Fragment>
            <ButtonWarning> Warning </ButtonWarning>
            <Button> Default </Button>
        </Fragment>
    )
}

export default ExtendStylesTS