import React from 'react';

import LogOut from '../log-out';

import { StyledLink, StyledDiv } from './styled-components';

import btnsData from './btns-data.json';

const Buttons = ({ profilePhoto, isLogin, onLogOut }) => {
  const buttons = btnsData.map(({ name, link, active }, index) => (
    <StyledLink key={index} to={link} theme={{ active }}>
      {name}
    </StyledLink>
  ));

  return (
    <StyledDiv>
      {isLogin ? (
        <LogOut profilePhoto={profilePhoto} onLogOut={onLogOut} />
      ) : (
        buttons
      )}
    </StyledDiv>
  );
};

export default Buttons;
