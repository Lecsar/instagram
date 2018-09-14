import styled from 'styled-components';

import {
  FLEX_ROW_CENTER,
  ERROR_COLOR,
  DELETE_TYPE,
  SpinnerStyle
} from '../../../../../const';

export const StyledBlock = styled.div`
  ${FLEX_ROW_CENTER};
  display: none;
  position: absolute;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);
  padding-left: 15%;
  padding-right: 15%;
  width: 70%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  top: 0;
`;

export const StyledSpan = styled.span`
  ${FLEX_ROW_CENTER};
`;

export const StyledIcon = styled.i`
  font-size: 2.5rem;
  margin-right: 1rem;
  border: 0;
`;

export const StyledDialogIcon = StyledIcon.extend`
  background-color: inherit;
  background: url(https://vignette.wikia.nocookie.net/bigmouth/images/d/db/Comment.png/revision/latest?cb=20180110181816);
  width: 2.5rem;
  height: 2.5rem;
  background-size: cover;
  margin-right: 0;
  filter: invert(1);
`;

export const StyledPost = styled.div`
  position: relative;
  height: 30rem;
  width: 30rem;
  margin-bottom: 3rem;
  cursor: pointer;

  &:nth-child(3n-1) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const DeleteIcon = styled.div.attrs({
  type: DELETE_TYPE
})`
  top: 0;
  right: 0.5rem;
  position: absolute;
  font-size: 3rem;
  color: ${ERROR_COLOR};
`;

export const Spinner = SpinnerStyle.extend`
  font-size: 1.5rem;
`;
