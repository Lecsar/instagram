import React from 'react';
import styled from 'styled-components';

import Logo from './header-blocks/logo';
import Search from './header-blocks/search/search';
import Buttons from './header-blocks/buttons/buttons';

import { FLEX_ROW, BORDER_COLOR, FLEX_ROW_CENTER } from '../../const';

const StyledHeader = styled.header`
  ${FLEX_ROW};
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid ${BORDER_COLOR};
  height: 7.7rem;
`;

const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER};
  justify-content: space-between;
  width: 100rem;
`;

const Header = ({
  // props
  profilePhoto,
  searchField,
  isLogin,
  // actions
  onLogOut,
  onChangeSearchInput,
  onResetSearchInput
}) => (
  <StyledHeader>
    <StyledDiv>
      <Logo />
      <Search
        // props
        searchField={searchField}
        // actions
        onChangeSearchInput={onChangeSearchInput}
        onResetSearchInput={onResetSearchInput}
      />
      <Buttons
        isLogin={isLogin}
        onLogOut={onLogOut}
        profilePhoto={profilePhoto}
      />
    </StyledDiv>
  </StyledHeader>
);

export default Header;
