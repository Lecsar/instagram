import React from 'react';
import styled from 'styled-components';
import { FLEX_ROW } from '../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW};
  justify-content: space-between;
`;

const StyledBtn = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 0;
  padding: 0;
  background-image: url('http://cdn.onlinewebfonts.com/svg/img_359060.png');
  background-size: cover;
`;

const LogOut = ({ onLogOut }) => (
  <StyledDiv>
    <StyledBtn onClick={onLogOut} />
  </StyledDiv>
);

export default LogOut;
