import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import {
  FLEX_ROW_CENTER,
  BORDER_COLOR,
  FLEX_ROW,
  BTN_COLOR_HEADER
} from '../../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER} width: 35rem;
  height: 7rem;
  background-color: white;
  border: 1px solid ${BORDER_COLOR};
  margin-top: 1rem;
`;

const StyledText = styled.p`
  ${FLEX_ROW};
  width: 100%;
  justify-content: center;
  font-size: 1.7rem;
`;

const StyledLink = styled(Link)`
  margin-left: 0.4rem;
  color: ${BTN_COLOR_HEADER};
  text-decoration: none;
`;

const LogIn = () => (
  <StyledDiv>
    <StyledText>
      Have an account?
      <StyledLink to="/">Log in</StyledLink>
    </StyledText>
  </StyledDiv>
);

export default LogIn;
