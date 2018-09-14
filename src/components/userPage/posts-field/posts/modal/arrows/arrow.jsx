import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: white;
  font-size: 5rem;
  cursor: pointer;
`;

const Arrow = ({ sign, style, onChangePost }) => (
    <StyledSpan onClick={onChangePost} style={style}>
        {sign}
    </StyledSpan>
);

export default Arrow;
