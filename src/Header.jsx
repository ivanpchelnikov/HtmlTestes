import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
 border: 1px solid red;
`;

const Header = ()=> ( 
    <HeaderContainer> 
        <h1>Header.</h1>
    </HeaderContainer>
);

export default Header;