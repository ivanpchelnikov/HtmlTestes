import React from 'react';
import styled from 'styled-components';

import BoardColumn from './BoardColumn';


const BoardColumnsContainer = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    `;

const ColumnWrapper = styled.div`
    width: 30%;
`;

const COLUMNS = ['WENT_WELL', 'DIDNT_GO_WELL', 'ACTION_ITEMS'];

const buildColumns  = () => {
    const result =[];
    for (const column of COLUMNS) {
        result.push(
            <ColumnWrapper>
                <BoardColumn />
            </ColumnWrapper>,
        );      
    }
    return result;
};

const BoardColumns = ({cards}) => (
    <BoardColumnsContainer>
        {COLUMNS.map(col => (
            <ColumnWrapper>
                <BoardColumn cards={cards.filter(card=>card.catergory ===col)} />
            </ColumnWrapper>
        ))}
    </BoardColumnsContainer>
);
export default BoardColumns;