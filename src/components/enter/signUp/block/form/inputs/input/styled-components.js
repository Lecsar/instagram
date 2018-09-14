import styled from 'styled-components';
import { BORDER_COLOR, BACKGROUND_COLOR } from '../../../../../../../const';

export const StyledInput = styled.input`
  margin-top: 1rem;
  padding-left: 1rem;
  width: calc(100% - 1rem);
  border: 1px solid ${BORDER_COLOR};
  border-radius: 3px;
  height: 3.4rem;
  outline: none;
  background-color: ${BACKGROUND_COLOR};
  font-size: 1.5rem;
`;
