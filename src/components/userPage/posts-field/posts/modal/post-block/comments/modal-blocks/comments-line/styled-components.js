import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    RESET,
    TEXT_COLOR,
    BTN_COLOR_HEADER,
    FLEX_ROW_CENTER
} from '../../../../../../../../../const';

export const StyledText = styled.p`
  ${RESET};
  color: ${TEXT_COLOR};
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: ${BTN_COLOR_HEADER};
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: 0;
`;

export const StyledCommentLine = styled.div`
  ${FLEX_ROW_CENTER};
  margin-left: 1.5rem;
  margin-right: 2rem;
  height: 2rem;
  font-size: 1.5rem;

  &:: {
    color: ${TEXT_COLOR};
  }
`;

export const StyledDiv = styled.div`
  padding-bottom: 1rem;
  border: 0;
  font-size: 3rem;
  margin-left: 10rem;
  cursor: pointer;
`;
