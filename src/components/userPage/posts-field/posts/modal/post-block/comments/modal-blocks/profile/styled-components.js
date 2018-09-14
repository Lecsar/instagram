import styled from 'styled-components';

import {
  FLEX_ROW,
  BORDER_COLOR,
  FLEX_ROW_CENTER,
  RESET
} from '../../../../../../../../../const';

export const StyledDiv = styled.div`
  ${FLEX_ROW};
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  width: 29rem;
  border-bottom: 1px solid ${BORDER_COLOR};
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const StyldeInfoGroup = styled.div`
  ${FLEX_ROW_CENTER};
`;

export const StyledH3 = styled.h3`
  ${RESET};
  font-size: 1.8rem;
  margin-right: 0.5rem;
`;

export const StyledH5 = styled.h5`
  ${RESET};
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
