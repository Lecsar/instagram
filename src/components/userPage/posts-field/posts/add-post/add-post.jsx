import React from 'react';
import styled from 'styled-components';

import { StyledPost } from '../post/styled-component';
import { BORDER_COLOR } from '../../../../../const';

const StyledAddPostField = styled(StyledPost)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${BORDER_COLOR};
  box-sizing: border-box;
`;

const StyledAddIcon = styled.img`
  width: 80%;
  height: 80%;
  filter: invert(85%);
`;

const AddPost = ({ addPostToggleField }) => (
  <StyledAddPostField onClick={addPostToggleField}>
    <StyledAddIcon
      src="https://image.flaticon.com/icons/svg/61/61183.svg"
      alt="addIcon"
    />
  </StyledAddPostField>
);

export default AddPost;
