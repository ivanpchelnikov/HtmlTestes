import React from 'react';
import styled from 'styled-components';

const BoardTitleContainer = styled.div`
 border: 1px solid red;
`;

const BoardTitle = ()=> (
    <BoardTitleContainer>
        <h1>BoardTitle</h1>
    </BoardTitleContainer>
);

export default BoardTitle;