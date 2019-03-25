import React from 'react';
import styled from 'styled-component';
import Header from './Header';
import ActivityBoard from './AcitivityBoard';


const AppContainer = styled.div`
 border: 1px solid red
`;

const App = ()=> (
     <AppContainer> 
         <Header />
         <ActivityBoard />
     </AppContainer>     
    );

export default App;