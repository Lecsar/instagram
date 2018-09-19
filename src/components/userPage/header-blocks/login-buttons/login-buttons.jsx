import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FLEX_ROW, BTN_COLOR_HEADER, FLEX_ROW_CENTER } from '../../../../const';

const btnsData = [
  {
    id: 1,
    name: 'Log In',
    link: '/',
    active: true
  },
  {
    id: 2,
    name: 'Sign Up',
    link: '/signup',
    active: false
  }
];

const StyledLink = styled(Link)`
  ${FLEX_ROW};
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 2rem;
  height: 2.7rem;
  text-decoration: none;
  color: ${BTN_COLOR_HEADER};
  border-radius: ${({ theme: { active } }) => active && '3px'};
  background-color: ${({ theme: { active } }) => active && BTN_COLOR_HEADER};
  color: ${({ theme: { active } }) => active && 'white'};
`;

const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER};
  justify-content: space-between;
  height: 100%;
`;

const Buttons = () => (
  <StyledDiv>
    {btnsData.map(({
 id, name, link, active 
}) => (
      <StyledLink key={id} to={link} theme={{ active }}>
        {name}
      </StyledLink>
    ))}
  </StyledDiv>
);

export default Buttons;
