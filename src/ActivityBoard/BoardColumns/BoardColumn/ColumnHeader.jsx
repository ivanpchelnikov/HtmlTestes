import React from 'react';
import styled from 'styled-components';

const ColumnHeaderContainer = styled.div`
    border: 1px solid red;
    `;

const ColumnHeader = () => (
    <ColumnHeaderContainer>
        <h1>ColumnHeader</h1>
    </ColumnHeaderContainer>
);

export default ColumnHeader;