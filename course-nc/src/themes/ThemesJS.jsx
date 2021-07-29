
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    border-radius: 10px;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: ${props => props.theme.bgColor};
`

const Title = styled.h2 `
    font-size: 25px;
    color: ${props => props.theme.color};
`

const Button = styled.button `
    font-size: 16px;
    background-color: ${props => props.theme.btnBg};
    color: ${props => props.theme.btnColor};
    padding: 10px 20px;
    cursor: pointer;

`


function ThemesJS() {

    const [dark, setDark] = useState(false)

    const themeLight = {
        bgColor: '#fff',
        color: '#000',
        btnBg: '#000',
        btnColor: '#fff'
    }

    const themeDark = {
        bgColor: '#333',
        color: '#fff',
        btnBg: '#fff',
        btnColor: '#000'
    }

    return (
        <ThemeProvider theme={dark ? themeDark : themeLight}>
            <Container>
                <Title> { dark ? 'Dark Theme' : 'Light Theme' } </Title>
                <Button onClick={ () => setDark(!dark) }> Change </Button>
            </Container>
        </ThemeProvider>
    )
}

export default ThemesJS
