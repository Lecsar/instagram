import React from 'react';
import styled from 'styled-components';
import { BORDER_COLOR, FLEX_ROW_CENTER } from '../../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER};
  justify-content: center;
  margin-left: 5rem;
`;

const StyledImg = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  border: 1px solid ${BORDER_COLOR};
`;

const ImgBlock = ({ profilePhoto }) => (
    <StyledDiv>
        <StyledImg src={profilePhoto} alt="profilePhoto" />
    </StyledDiv>
);

export default ImgBlock;
