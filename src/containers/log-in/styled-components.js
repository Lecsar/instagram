import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  FLEX_COLUMN_CENTER,
  FLEX_ROW_CENTER,
  BORDER_COLOR,
  FLEX_ROW,
  BTN_COLOR_HEADER
} from '../../const';

export const StyledMain = styled.main`
  ${FLEX_COLUMN_CENTER};
  position: absolute;
  top: calc(50% - 27rem);
  left: calc(50% - (93.5rem / 2));
`;

export const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER};
  width: 35rem;
  height: 7rem;
  background-color: white;
  border: 1px solid ${BORDER_COLOR};
  margin-top: 1rem;
`;

export const StyledText = styled.p`
  ${FLEX_ROW};
  width: 100%;
  justify-content: center;
  font-size: 1.7rem;
`;

export const StyledLink = styled(Link)`
  margin-left: 0.4rem;
  color: ${BTN_COLOR_HEADER}
  text-decoration: none;
`;
