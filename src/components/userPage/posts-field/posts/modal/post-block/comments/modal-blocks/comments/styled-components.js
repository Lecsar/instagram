import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BTN_COLOR_HEADER } from '../../../../../../../../../const';

export const StyledDiv = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 0.3rem;
  height: 23rem;
  overflow: auto;
`;

export const StyledText = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  cursor: pointer;
`;

export const StyledComments = styled.div`
  font-size: 1.5rem;
  text-align: justify;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  margin-right: 0.5rem;
  font-weight: 700;
`;

export const StyledBtn = styled.button`
  display: block;
  border: 0;
  background-color: transparent;
  padding: 0.2rem;
  cursor: pointer;
  outline: none;
  color: ${BTN_COLOR_HEADER};
  margin-left: auto;
`;
