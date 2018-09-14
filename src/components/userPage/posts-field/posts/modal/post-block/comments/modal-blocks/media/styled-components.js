import styled from 'styled-components';
import {
    FLEX_COLUMN,
    BORDER_COLOR,
    FLEX_ROW,
    TEXT_COLOR
} from '../../../../../../../../../const';

export const StyledDiv = styled.div`
  ${FLEX_COLUMN};
  margin-left: 1.5rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-top: 1px solid ${BORDER_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};
  width: 29rem;
  height: 8rem;
`;

export const StyledGroup = styled.div`
  ${FLEX_ROW};
`;

export const StyledLikes = styled.span`
  font-size: 3rem;

  &:first-child {
    margin-right: 1rem;
  }
`;

export const StyledLikesCounter = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

export const StyledDate = styled.span`
  font-size: 1.2rem;
  color: ${TEXT_COLOR};
`;
