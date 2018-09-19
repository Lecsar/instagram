import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './show-dropdown.css';

import { BORDER_COLOR, BTN_COLOR_HEADER } from '../../../const';

const DropDownMenu = styled.ul`
  display: none;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 7.7rem;
  right: 10%;
  border-radius: 0 0 5px 5px;
  border: 1px solid ${BORDER_COLOR};
  border-top: 0;
  width: 18rem;
`;

const MenuElement = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  list-style-type: none;
  font-size: 2rem;
  background-color: white;
  cursor: pointer;

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background-color: ${BTN_COLOR_HEADER};
    color: white;
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  box-sizing: border-box;

  &:hover {
    background-color: ${BTN_COLOR_HEADER};
    color: white;
  }
`;

const DropDown = ({ onLogOut }) => (
  <DropDownMenu className="dropdown-menu">
    <MenuElement>
      <MenuLink to="/profile/naishuller">Мой профиль</MenuLink>
    </MenuElement>
    <MenuElement>
      <MenuLink to="../news">Новости</MenuLink>
    </MenuElement>
    <MenuElement onClick={onLogOut}>Выйти</MenuElement>
  </DropDownMenu>
);

export default DropDown;
