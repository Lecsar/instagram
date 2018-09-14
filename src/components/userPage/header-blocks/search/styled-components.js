import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  TEXT_COLOR,
  FLEX_COLUMN,
  BACKGROUND_COLOR,
  BORDER_COLOR,
  BTN_COLOR_HEADER,
  Spin
} from '../../../../const';

export const StyledUl = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 80%;
  background-color: white;
  width: 100%;
  box-shadow: 0px 1px 18px 0px rgba(50, 50, 50, 0.75);
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #fafafa;
  }
`;

export const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  border-radius: 50%;
`;

export const StyledDiv = styled.div`
  ${FLEX_COLUMN};
`;

export const StyledH3 = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StyledName = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  color: @${TEXT_COLOR};
  font-weight: 500;
`;

export const StyledInputBlock = styled.div`
  ${FLEX_COLUMN};
  justify-content: center;
  height: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  height: 3rem;
  border: 0;
  border-radius: 5px;
  background-color: ${BACKGROUND_COLOR};
  padding-left: 1rem;
  font-size: 1.5rem;
  outline: none;
  border: 1px solid ${BORDER_COLOR};
`;

export const StyledSpinner = styled.div`
  color: ${BTN_COLOR_HEADER};
  font-size: 0.25rem;
  right: 8%;
  top: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  text-indent: -9999em;
  animation: ${Spin} 1.3s infinite linear;
  transform: translateZ(0);
  position: absolute;
`;
