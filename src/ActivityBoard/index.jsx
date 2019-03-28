import React from 'react';
import styled from 'styled-components';
import BoardColumns from './BoardColumns';
import BoardTitle from './BoardTitle';

const ActivityBoardContainer = styled.div`
 border: 1px solid red;
`;

const ActivityBoad = ({cards})=> (
    <ActivityBoardContainer>
        <BoardTitle />
        <BoardColumns cards ={cards} />
    </ActivityBoardContainer>
);

export default ActivityBoad;