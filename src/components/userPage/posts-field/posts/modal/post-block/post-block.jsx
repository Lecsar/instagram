import React from 'react';
import styled from 'styled-components';

import Comments from './comments/comments';

import {
  FLEX_ROW,
  IMG_STUB_LINK,
  correctImageSize
} from '../../../../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW};
  width: 93rem;
  height: 45rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const StyledFullImg = styled.img`
  background: black;
`;

const PostBlock = ({
  // props
  post,
  profileName,
  profilePhoto,
  isLogin,
  commentFieldValue,
  isMyPage,
  openAnswerInput,
  // actions
  onResetOpenPostId,
  onChangeCommentLine,
  addComment,
  deleteComment,
  openTextInputForAnswer,
  onChangeInputForAnswer,
  answerOnComment,
  closeTextInputForAnswer
}) => {
  const { img = IMG_STUB_LINK, ...postInfo } = post;

  const MAX_WIDTH = 600;
  const MAX_HEIGHT = 450;

  const imgStyle = correctImageSize(img, MAX_WIDTH, MAX_HEIGHT);

  const comments = (
    <Comments
      // props
      post={postInfo}
      profileName={profileName}
      profilePhoto={profilePhoto}
      isLogin={isLogin}
      commentFieldValue={commentFieldValue}
      isMyPage={isMyPage}
      openAnswerInput={openAnswerInput}
      // actions
      onResetOpenPostId={onResetOpenPostId}
      onChangeCommentLine={onChangeCommentLine}
      addComment={addComment}
      deleteComment={deleteComment}
      openTextInputForAnswer={openTextInputForAnswer}
      onChangeInputForAnswer={onChangeInputForAnswer}
      answerOnComment={answerOnComment}
      closeTextInputForAnswer={closeTextInputForAnswer}
    />
  );

  return (
    <StyledDiv>
      <StyledFullImg style={imgStyle} src={img} alt="avatar" />
      {comments}
    </StyledDiv>
  );
};

export default PostBlock;
