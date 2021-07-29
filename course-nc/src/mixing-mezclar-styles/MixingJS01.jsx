
import React from 'react'
import styled, { css } from 'styled-components'

// StyleCenter Alinear al centro
const styleCenter = css `
    display: flex;
    align-items: center;
    justify-content: center;
`

// StyleLeft : Alinear a la izquierda
const styleLeft = css `
    display: flex;
    justify-content: left;
`

// Style ColorDark
const colorDark = css `
    background-color: #535559;
`

// Component-Style Container 
const Container = styled.div `
    width: 500px;
    height: 500px;
    border-radius: 20px;

    ${colorDark}

    // Mixing styleCenter
    ${styleCenter}

    // Mixing styleLeft
    /* ${styleLeft} */
`

function MixingJS01() {
    return (
        <Container>
            <h2> MIXING - MEZCLAR STYLES</h2>
            <h4> JavaScript </h4>
        </Container>
    )
}

export default MixingJS01


