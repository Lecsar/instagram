import React from 'react';
import styled from 'styled-components';
import {
    BTN_COLOR_HEADER,
    ERROR_COLOR
} from '../../../../../../../../../const';

const StyledDiv = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledBtn = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0.2rem;
  cursor: pointer;
  outline: none;
`;

const StyledBtnAnswer = StyledBtn.extend`
  color: ${BTN_COLOR_HEADER};
`;

const StyledBtnDelete = StyledBtn.extend`
  color: ${ERROR_COLOR};
`;

const CommentBtns = ({ isMyPage, openTextInputForAnswer, deleteComment }) => (
    <StyledDiv>
        <StyledBtnAnswer onClick={openTextInputForAnswer}>Answer</StyledBtnAnswer>
        {isMyPage && (
            <StyledBtnDelete onClick={deleteComment}>delete</StyledBtnDelete>
        )}
    </StyledDiv>
);

export default CommentBtns;
