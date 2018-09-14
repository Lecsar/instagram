import React from 'react';
import styled from 'styled-components';

import Close from './close/close';
import PostBlock from './post-block/post-block';

import Arrow from './arrows/arrow';
import { FLEX_ROW_CENTER } from '../../../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER};
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PostModal = ({
  // props
  post,
  profilePhoto,
  profileName,
  isLogin,
  commentFieldValue,
  isMyPage,
  openAnswerInput,
  // actions
  onClosePost,
  onChangePost,
  onResetOpenPostId,
  onChangeCommentLine,
  addComment,
  deleteComment,
  openTextInputForAnswer,
  onChangeInputForAnswer,
  answerOnComment,
  closeTextInputForAnswer
}) => {
  const { previousPostId, nextPostId, ...postInfo } = post;

  const postBlock = (
    <PostBlock
      // props
      post={postInfo}
      profilePhoto={profilePhoto}
      profileName={profileName}
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

  const previousPost = (
    <Arrow
      sign="⇐"
      style={{ visibility: previousPostId ? 'visible' : 'hidden' }}
      onChangePost={() => onChangePost(previousPostId)}
    />
  );

  const nextPost = (
    <Arrow
      sign="⇒"
      style={{ visibility: nextPostId ? 'visible' : 'hidden' }}
      onChangePost={() => onChangePost(nextPostId)}
    />
  );

  const POST_ID = 'post-back';

  const clickOnBack = (targetID) => {
    if (targetID === POST_ID) {
      onClosePost();
    }
  };

  return (
    <StyledDiv id={POST_ID} onClick={({ target: { id } }) => clickOnBack(id)}>
      <Close onClosePost={onClosePost} />
      {previousPost}
      {postBlock}
      {nextPost}
    </StyledDiv>
  );
};

export default PostModal;
