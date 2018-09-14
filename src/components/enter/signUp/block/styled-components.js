import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  BORDER_COLOR,
  RESET,
  TEXT_COLOR,
  BTN_COLOR_HEADER,
  FLEX_ROW_CENTER
} from '../../../../const';

export const StyledSection = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  width: 31rem;
  background-color: white;
  border: 1px solid ${BORDER_COLOR};
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: ${TEXT_COLOR};
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

export const StyledDescription = styled.p`
  ${RESET};
  margin-top: 1.5rem;
  text-align: center;
  font-size: 2rem;
  color: ${TEXT_COLOR};
`;

export const StyledBtn = styled.button`
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

export const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER};
  justify-content: space-around;
  margin-top: 1.5rem;
`;

export const StyledHr = styled.hr`
  border-color: ${BORDER_COLOR};
  width: 42%;
`;

export const StyledSpan = styled.span`
  font-size: 1.5rem;
  color: ${TEXT_COLOR};
  width: 12%;
  text-align: center;
`;

export const StyledWarning = styled.p`
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  font-size: 1.7rem;
  color: ${TEXT_COLOR};
`;
