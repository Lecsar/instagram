import React from 'react';

import {
  StyledText,
  StyledLink,
  StyledInput,
  StyledCommentLine,
  StyledDiv
} from './styled-components';

import { ENTER_KEY_CODE, createID } from '../../../../../../../../../const';

const CommentLine = ({
  // props
  isLogin,
  commentFieldValue,
  // actions
  onChangeCommentLine,
  addComment,
  onResetOpenPostId
}) => {
  const commentLogOut = (
    <StyledText>
      <StyledLink onClick={onResetOpenPostId} to="/">
        Log In{' '}
      </StyledLink>{' '}
      to like or comment
    </StyledText>
  );

  const commentLogIn = (
    <StyledInput
      type="text"
      placeholder="Add a comment..."
      value={commentFieldValue}
      onChange={({ target: { value } }) => onChangeCommentLine(value)}
      onKeyDown={({ keyCode }) => keyCode === ENTER_KEY_CODE && addComment(createID())
      }
    />
  );

  return (
    <StyledCommentLine>
      {isLogin ? commentLogIn : commentLogOut}
      <StyledDiv>&#8230;</StyledDiv>
    </StyledCommentLine>
  );
};

export default CommentLine;
