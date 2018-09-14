import React from 'react';
import styled from 'styled-components';

import Profile from './modal-blocks/profile/profile';
import CommentsBlock from './modal-blocks/comments/comments';
import Media from './modal-blocks/media/media';
import CommentLine from './modal-blocks/comments-line/comment-line';

import AnswerInput from './modal-blocks/answer-input/answer-input';
import { Spin, BTN_COLOR_HEADER } from '../../../../../../../const';

const StyledPost = styled.div`
  width: 33rem;
  background-color: white;
  position: relative;
`;

const StyledAnswerField = styled.div`
  position: absolute;
  top: 90%;
  left: 1rem;
`;

const StyledSpinner = styled.div`
  color: ${BTN_COLOR_HEADER};
  font-size: 0.3rem;
  right: 6%;
  top: 47%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  text-indent: -9999em;
  animation: ${Spin} 1.3s infinite linear;
  transform: translateZ(0);
  z-index: 2;
`;

const Comments = ({
  // props
  post: {
 place, comments, likes, date, id: postId 
},
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
  const { currentID, isRequest } = openAnswerInput;

  const profile = (
    <Profile
      // props
      profileName={profileName}
      profilePhoto={profilePhoto}
      place={place}
      // actions
    />
  );

  const commentsBlock = (
    <CommentsBlock
      // props
      comments={comments}
      isMyPage={isMyPage}
      isLogin={isLogin}
      isOpenAnswerInput={currentID}
      // actions
      onResetOpenPostId={onResetOpenPostId}
      deleteComment={deleteComment}
      openTextInputForAnswer={openTextInputForAnswer}
      onChangeInputForAnswer={onChangeInputForAnswer}
      closeTextInputForAnswer={closeTextInputForAnswer}
    />
  );

  const media = (
    <Media
      // props
      likes={likes}
      date={date}
      // actions
    />
  );

  const commentLine = (
    <CommentLine
      // props
      isLogin={isLogin}
      commentFieldValue={commentFieldValue}
      // actions
      onChangeCommentLine={onChangeCommentLine}
      addComment={addComment}
      onResetOpenPostId={onResetOpenPostId}
    />
  );

  const answerInput = (
    <AnswerInput
      // props
      answerStyle={{ display: currentID ? 'flex' : 'none' }}
      openAnswerInput={openAnswerInput}
      postId={postId}
      isLogin={isLogin}
      profileName={profileName}
      // actions
      answerOnComment={answerOnComment}
      closeTextInputForAnswer={closeTextInputForAnswer}
      onChangeInputForAnswer={onChangeInputForAnswer}
    />
  );

  return (
    <StyledPost>
      {profile}
      {commentsBlock}
      <StyledAnswerField>{answerInput}</StyledAnswerField>
      {media}
      {commentLine}
      {isRequest && <StyledSpinner />}
    </StyledPost>
  );
};

export default Comments;
