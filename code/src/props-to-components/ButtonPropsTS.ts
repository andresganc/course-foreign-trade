

import styled from 'styled-components'

const Button = styled.button<{ primary?: boolean }>`
    background-color: ${props => props.primary ? '#3B71F7' : 'gray' }; 
    border: none;
    border-radius: 10px;
    width: 8em;
    height: 3em;
    margin: 2px;
    //padding: 1em 3em;
    color: red;
`;

export default Button;