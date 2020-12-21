
import React, { Fragment } from 'react'
import styled from 'styled-components'

const Button = styled.button `
    background-color: lightgray;
    border: none;
    border-radius: 10px;
    width: 8em;
    height: 3em;
    //padding: 1em 3em;
    color: palevioletred;
`

function NCButtonBaseReact() {
    return (
        <Fragment>
            <Button> Hola </Button>
        </Fragment>
    )
}

export default NCButtonBaseReact
