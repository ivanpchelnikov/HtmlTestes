import React from 'react';
import styled from 'styled-components';

const BoardCardContainer = styled.div`
    border: 1px solid red;
    `;

const BoardCard = ({card}) => (
    <BoardCardContainer>
        <h1>{card.content}</h1>
    </BoardCardContainer>
);

export default BoardCard;