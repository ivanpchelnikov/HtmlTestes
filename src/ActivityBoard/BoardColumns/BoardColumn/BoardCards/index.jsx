import React from 'react';
import styled from 'styled-components';

import BoardCard from './BoardCard';

const BoardCardsContainer = styled.div`
    border: 1px solid red;
    display flex;
    flex-wrap: wrap;
    `;

const CardWrapper = styled.div`
    width: 50%;
`; 


const BoardCards = ({cards}) => (
    <BoardCardsContainer>
        {cards.map(card => (
            <CardWrapper>
                <BoardCard card ={card} />
            </CardWrapper>
        ))}
    </BoardCardsContainer>
);

export default BoardCards;