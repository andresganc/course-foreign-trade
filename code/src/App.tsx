
import React, { Fragment } from 'react';


// Components
import StylesGlobales from './global-styles/StylesGlobalesTS'
import Container from './components/div-container-center/DivContainerCenterTS'
import ButtonPropsTS from './props-to-components/ButtonPropsTS'

// Interface de props - Opcional 
export interface IProps {
  primary: boolean;
}

function App() {
  return (
    <Fragment>
      <StylesGlobales />
      <Container>
      <ButtonPropsTS> Cancelar </ButtonPropsTS>
      <ButtonPropsTS> Enviar </ButtonPropsTS>
    </Container>
    </Fragment>
    
  );
}

export default App;
