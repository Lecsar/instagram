import React from 'react';
import styled from 'styled-components';

import { FLEX_ROW, BORDER_COLOR, BTN_COLOR_HEADER } from '../../../const';

import './show-dropdown.css';

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

const DropDownMenu = styled.ul`
  display: none;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: 0 0 5px 5px;
  border: 1px solid ${BORDER_COLOR};
  border-top: 0;
`;

const MenuElement = styled.li`
  padding: 0.5rem 2rem;
  list-style-type: none;
  font-size: 2.3rem;
  background-color: white;

  &:hover {
    background-color: ${BTN_COLOR_HEADER};
    color: white;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

const LogOut = ({ profilePhoto, onLogOut }) => (
  <StyledDiv>
    <MiniUserPhoto
      className="show-dropdown-menu"
      src={profilePhoto}
      alt="miniUserPhoto"
    />
    <ChevonDown className="show-dropdown-menu" />
    {/* <StyledBtn onClick={onLogOut} /> */}
    <DropDownMenu className="dropdown-menu">
      <MenuElement>Новости</MenuElement>
      <MenuElement onClick={onLogOut}>Выйти</MenuElement>
    </DropDownMenu>
  </StyledDiv>
);

export default LogOut;
