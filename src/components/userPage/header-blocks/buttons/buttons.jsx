import React from 'react';

import LogOut from '../log-out';

import { StyledLink, StyledDiv } from './styled-components';

import btnsData from './btns-data.json';

const Buttons = ({ isLogin, onLogOut }) => {
    const buttons = btnsData.map(({ name, link, active }, index) => {
        return (
            <StyledLink key={index} to={link} theme={{ active: active }}>
                {name}
            </StyledLink>
        );
    });

    return (
        <StyledDiv>{isLogin ? <LogOut onLogOut={onLogOut} /> : buttons}</StyledDiv>
    );
};

export default Buttons;
