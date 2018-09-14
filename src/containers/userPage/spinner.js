import styled from 'styled-components';
import { BTN_COLOR_HEADER, Spin } from '../../const';

// eslint-disable-next-line
export const StyledSpinner = styled.div`
  color: ${BTN_COLOR_HEADER};
  font-size: 1rem;
  left: 50%;
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

export const RequestStub = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: inherit;
`;
