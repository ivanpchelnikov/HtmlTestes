import React from 'react';
import styled from 'styled-components';

import ColumnHeader from './ColumnHeader';
import BoardCards from './BoardCards';


const BoardColumnContainer = styled.div`
    border: 1px solid red;
    `;

const BoardColumn  = ({cards}) => (
    <BoardColumnContainer>
        <ColumnHeader />
        <BoardCards cards ={cards} />
    </BoardColumnContainer>
);

export default BoardColumn;