import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FLEX_ROW, RESET } from '../../../const';

const StyledDiv = styled.div`
  height: 4rem;
  width: 18rem;
`;

const StyledLink = styled(Link)`
  ${FLEX_ROW};
  width: 100%;
  text-decoration: none;
`;

const StyledLogo = styled.div`
  background-position-x: -1px;
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
  background: url('https://www.instagram.com/static/images/ico/apple-touch-icon-180x180-precomposed.png/85a358fb3b7d.png')
    no-repeat;
  background-size: cover;
`;

const StyledH3 = styled.h3`
  ${FLEX_ROW};
  ${RESET};
  justify-content: flex-end;
  align-items: center;
  font-size: 2.7rem;
  width: calc(100% - 5rem);
  border-left: 1px solid black;
  color: black;
`;

const Logo = () => (
  <StyledDiv>
    <StyledLink to="/">
      <StyledLogo />
      <StyledH3>Instagram</StyledH3>
    </StyledLink>
  </StyledDiv>
);

export default Logo;
