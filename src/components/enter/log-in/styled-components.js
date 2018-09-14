import styled from 'styled-components';
import {
  FLEX_ROW,
  ERROR_COLOR,
  BORDER_COLOR,
  BTN_COLOR_HEADER,
  BTN_COLOR_UNACTIVE,
  Spin
} from '../../../const';

export const StyledLoginBtn = styled.button`
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

export const StyledLoginBtnUnActive = StyledLoginBtn.extend`
  cursor: not-allowed;
  background-color: ${BTN_COLOR_UNACTIVE};
`;

export const StyledText = styled.p`
  ${FLEX_ROW}, width: 100%;
  justify-content: center;
  font-size: 1.7rem;
  margin-top: 1rem;
`;

export const ErrorMessage = StyledText.extend`
  color: ${ERROR_COLOR};
  text-align: center;
`;

export const StyledLoginForm = styled.form`
  margin-top: 1.5rem;
  width: 100%;
  position: relative;
`;

export const StyledSignMain = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  width: 31rem;
  background-color: white;
  border: 1px solid ${BORDER_COLOR};
`;

export const StyledSpinner = styled.div`
  color: rgb(5, 5, 221);
  font-size: 0.3rem;
  left: 50%;
  top: 12.5rem;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  text-indent: -9999em;
  animation: ${Spin} 1.3s infinite linear;
  transform: translateZ(0);
`;
