
import React, { Fragment } from 'react';


// Components
import StylesGlobales from './global-styles/styles-globales-ts'
import Container from './components/div-container-center/DivContainerCenterTS'
import ButtonPropsTS from './props-to-components/ButtonPropsTS'
import Nesting from './nesting-anidaciones/NestingTS01'
import Mixing from './mixing-mezclar-styles/MixingTS01'
import ExtendStyles from './extend-styles/ExtendStylesTS'
import Themes from './themes/ThemesJS'


// Interface de props - Opcional 
export interface IProps {
  primary: boolean;
}

function App() {
  return (
    <Fragment>
      <Themes />
    </Fragment>
    
  );
}

export default App;
