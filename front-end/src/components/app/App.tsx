import * as React from 'react';
import  styled, { createGlobalStyle } from 'styled-components';

import { SideNavContainer } from '../container/SideNavContainer';
import { MainContainer } from '../container/MainContainer';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { GET_CARE_RECIPIENTS } from '@App/store/types/userDataTypes';

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
  const [onLoad] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchPatientList() {
      const request = await fetch('http://localhost:8000/recevingcare')
      .then(res => res.json())
      .then(resp => resp);
      console.log(request);
      return dispatch( 
        { type: GET_CARE_RECIPIENTS,
          payload: request
        }
      );
    }
    fetchPatientList();
    console.log('APP STARTED');
  },  [onLoad]);

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