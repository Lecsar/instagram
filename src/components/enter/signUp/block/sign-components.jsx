import React from 'react';
import styled from 'styled-components';
import { RESET } from '../../../../const';

const StyledH1 = styled.h1`
  ${RESET};
  margin-top: 1.5rem;
  font-size: 4.5rem;
  text-align: center;
`;

const StyledH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const SignHeader = () => <StyledH1>Instagram</StyledH1>;

export const GetTheApp = () => <StyledH3>Get the app</StyledH3>;
