import React from 'react';
import styled from 'styled-components';
import { FLEX_ROW, RESET } from '../../../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW};
  font-size: 2rem;
`;

const StyledText = styled.p`
  ${RESET};
  text-align: justify;
`;

const StyledSpan = styled.span`
  font-weight: 700;
  margin-right: 1rem;
`;

const Text = ({ description: { name, comment } }) => (
    <StyledDiv>
        <StyledText>
            <StyledSpan>{name}</StyledSpan>
            {comment}
        </StyledText>
    </StyledDiv>
);

export default Text;
