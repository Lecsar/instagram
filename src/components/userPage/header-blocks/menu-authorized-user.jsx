import React from 'react';
import styled from 'styled-components';

import { FLEX_ROW } from '../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  height: 100%;
`;

const MiniUserPhoto = styled.img`
  border-radius: 50%;
  height: 4.8rem;
  padding: 1.5rem 1rem;
  padding-left: 2.5rem;
`;

const ChevonDown = styled.span`
  background: url('http://www.e-zicom.com/skin/frontend/ezicomFlatV2/blank/images/chevon_down.png')
    no-repeat;
  background-size: contain;
  height: 100%;
  width: 1.5rem;
  filter: invert(0.75);
  background-position-y: 50%;
`;

const MenuAuthorizedUser = ({ profilePhoto }) => (
  <StyledDiv className="show-dropdown-menu">
    <MiniUserPhoto src={profilePhoto} alt="miniUserPhoto" />
    <ChevonDown />
  </StyledDiv>
);

export default MenuAuthorizedUser;
