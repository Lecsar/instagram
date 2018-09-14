import React from 'react';
import styled from 'styled-components';
import { BTN_COLOR_HEADER } from '../../../../../../const';

const SignUpBtn = ({ onResetDefaultView }) => {
  const onSignUp = (e) => {
    e.preventDefault();
    onResetDefaultView();
  };

  const StyledBtn = styled.button`
    margin-top: 1.5rem;
    width: 100%;
    height: 3rem;
    border: 0;
    border-radius: 3px;
    font-size: 1.7rem;
    color: white;
    background-color: ${BTN_COLOR_HEADER};
    cursor: pointer;
    outline: none;
  `;

  return <StyledBtn onClick={onSignUp}>Sign Up</StyledBtn>;
};

export default SignUpBtn;
