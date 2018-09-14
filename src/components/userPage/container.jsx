import React from 'react';
import styled from 'styled-components';
import createPureStatelessComponent from 'react-pure-stateless-component';

import UserInfo from './userInfo/userInfo';
import PostsField from './posts-field/posts-field';
import { ERROR_COLOR, BTN_COLOR_HEADER } from '../../const';

const StyledContainer = styled.div`
  width: 100rem;
`;

const Container = ({
  // props
  user,
  openPostId,
  isLogin,
  commentFieldValue,
  isMyPage,
  openAnswerInput,
  addPostReducer,
  deleteReducer,
  // actions
  onOpenPost,
  onClosePost,
  onChangePost,
  onResetOpenPostId,
  onChangeCommentLine,
  addComment,
  openTextInputForAnswer,
  onChangeInputForAnswer,
  answerOnComment,
  closeTextInputForAnswer,
  addPostActions,
  deleteActions,
  toggleFollowOnUserRequest
}) => {
  const {
    profileName = '',
    followers = [],
    following = [],
    posts = [],
    description = '',
    profilePhoto = ''
  } = user;

  const amountPosts = posts.length;
  const amountFollowing = following.length;
  const myProfileIsFollowedOnCurrentProfileName = !!followers.find(
    profileNameOfFollowedUser => profileNameOfFollowedUser === isLogin
  );

  const { isRequestOnFollow } = deleteReducer;

  const dataForFollowBtn = {
    style: {
      backgroundColor: myProfileIsFollowedOnCurrentProfileName
        ? ERROR_COLOR
        : BTN_COLOR_HEADER,
      display: isMyPage ? 'none' : 'flex'
    },
    styleForSpinner: {
      display: isRequestOnFollow ? 'flex' : 'none',
      color: myProfileIsFollowedOnCurrentProfileName
        ? ERROR_COLOR
        : BTN_COLOR_HEADER
    },
    text: myProfileIsFollowedOnCurrentProfileName ? 'Unfollow' : 'Follow',
    toggleFollowOnUserRequest: () => toggleFollowOnUserRequest({
        profileNameOfAuthorizedUser: isLogin,
        profileName,
        shouldUnFollow: myProfileIsFollowedOnCurrentProfileName
      })
  };

  const userInfo = (
    <UserInfo
      // props
      profileName={profileName}
      amountPosts={amountPosts}
      amountFollowing={amountFollowing}
      followers={followers}
      dataForFollowBtn={dataForFollowBtn}
      profilePhoto={profilePhoto}
      description={description}
      // actions
      toggleFollowOnUserRequest={toggleFollowOnUserRequest}
    />
  );

  const postsField = (
    <PostsField
      // props
      profileName={profileName}
      profilePhoto={profilePhoto}
      posts={posts}
      openPostId={openPostId}
      isLogin={isLogin}
      commentFieldValue={commentFieldValue}
      isMyPage={isMyPage}
      openAnswerInput={openAnswerInput}
      addPostReducer={addPostReducer}
      deleteReducer={deleteReducer}
      // actions
      onOpenPost={onOpenPost}
      onClosePost={onClosePost}
      onChangePost={onChangePost}
      onResetOpenPostId={onResetOpenPostId}
      onChangeCommentLine={onChangeCommentLine}
      addComment={addComment}
      openTextInputForAnswer={openTextInputForAnswer}
      onChangeInputForAnswer={onChangeInputForAnswer}
      answerOnComment={answerOnComment}
      closeTextInputForAnswer={closeTextInputForAnswer}
      addPostActions={addPostActions}
      deleteActions={deleteActions}
    />
  );

  const userNotFound = (
    <h1 style={{ textAlign: 'center', fontSize: '3.5rem' }}>USER NOT FOUND</h1>
  );

  return profileName ? (
    <StyledContainer>
      {userInfo}
      {postsField}
    </StyledContainer>
  ) : (
    userNotFound
  );
};

export default createPureStatelessComponent(Container);
