import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FLEX_ROW, FLEX_ROW_CENTER } from '../../../const';

export const Li = styled.li`
  list-style-type: none;
  padding: 0.8rem;
  font-size: 1.2rem;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const FooterStyled = styled.footer`
  ${FLEX_ROW};
  justify-content: space-between;
  height: 10rem;
  width: 93.5rem;
  position: relative;
  top: calc(100% - 10rem);
`;

export const Ul = styled.ul`
  ${FLEX_ROW_CENTER};
  padding: 0;
  margin: 0;
`;

export const H2 = styled.h2`
  ${FLEX_ROW_CENTER};
  font-size: 1.8rem;
`;
