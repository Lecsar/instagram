import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  position: absolute;
  color: white;
  font-size: 10rem;
  top: 0;
  left: calc(100% - 10rem);
  cursor: pointer;
  padding: 2rem;
  background-color: rgba(240, 248, 255, 0);
  border: 0;
  outline: none;
`;

const Close = ({ onClosePost }) => (
    <StyledBtn onClick={onClosePost}>&times;</StyledBtn>
);

export default Close;
