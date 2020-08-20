import * as React from 'react';
import  styled, { createGlobalStyle } from 'styled-components';

import { SideNavContainer } from '../container/SideNavContainer';
import { MainContainer } from '../container/MainContainer';

const GlobalStyle = createGlobalStyle`
  body { 
    background-color: #e8e9eb;
    overflow: hidden;
    font-family: Circular Std Book;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const App: React.FunctionComponent = () => { 
    return (
      <>
        <GlobalStyle />
          <AppContainer >
            <SideNavContainer />
            <MainContainer />
          </AppContainer >
      </>
    );
};

export default App;