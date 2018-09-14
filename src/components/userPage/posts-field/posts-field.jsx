import React from 'react';
import styled from 'styled-components';

import Post from './posts/post/post';
import PostModal from './posts/modal/post-modal';
import { FLEX_ROW, IMG_STUB_LINK } from '../../../const';
import AddPost from './posts/add-post/add-post';
import AddrPostForm from './posts/add-post/add-post-form';

const StyledSection = styled.section`
  ${FLEX_ROW};
  width: 100%;
  flex-wrap: wrap;
`;

const PostsField = ({
  // props
  posts,
  openPostId,
  profileName,
  profilePhoto,
  isLogin,
  isMyPage,
  commentFieldValue,
  openAnswerInput,
  addPostReducer: {
    isOpenAddWindow,
    srcImgDataBs64,
    textAreaValue,
    img,
    isRequest,
    error
  },
  deleteReducer: {
    deletedPost: { deletedPostId, isRequestOnDeletedPost }
  },
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
  deleteActions: { deletePostRequest }
}) => {
  const { addPostToggleField } = addPostActions;

  // eslint-disable-next-line no-shadow
  const postBlocks = posts.map(({ id, img = IMG_STUB_LINK, ...postInfo }) => (
    <Post
      key={id}
      // props
      post={postInfo}
      img={img}
      styleForSpinner={{
        display:
          isRequestOnDeletedPost && deletedPostId === id ? 'flex' : 'none'
      }}
      styleForDeleteIcon={{ display: isMyPage ? 'flex' : 'none' }}
      // actions
      onOpenPost={() => onOpenPost(id)}
      deletePost={() => deletePostRequest({ profileName, deletedPostId: id })}
    />
  ));

  // для показа стрелок пролистывания
  const openPostIndex = posts.findIndex(({ id }) => id === openPostId);

  const amountPosts = posts.length - 1;

  let previousPostId;
  let nextPostId;

  if (openPostId) {
    // если не последнее фото
    if (openPostIndex < amountPosts) {
      nextPostId = posts[openPostIndex + 1].id;
    }

    // если не первое фото
    if (openPostIndex > 0) {
      previousPostId = posts[openPostIndex - 1].id;
    }
  }

  const showedPost = openPostIndex >= 0 && {
    ...posts.find(({ id }) => id === openPostId),
    nextPostId,
    previousPostId
  };

  const postModal = (
    <PostModal
      // props
      post={showedPost}
      profileName={profileName}
      profilePhoto={profilePhoto}
      isLogin={isLogin}
      commentFieldValue={commentFieldValue}
      isMyPage={isMyPage}
      openAnswerInput={openAnswerInput}
      // actions
      onClosePost={onClosePost}
      onChangePost={onChangePost}
      onResetOpenPostId={onResetOpenPostId}
      onChangeCommentLine={onChangeCommentLine}
      addComment={addComment}
      openTextInputForAnswer={openTextInputForAnswer}
      onChangeInputForAnswer={onChangeInputForAnswer}
      answerOnComment={answerOnComment}
      closeTextInputForAnswer={closeTextInputForAnswer}
    />
  );

  return (
    <StyledSection>
      {postBlocks}
      {isMyPage && <AddPost addPostToggleField={addPostToggleField} />}
      {showedPost && postModal}
      {isOpenAddWindow && (
        <AddrPostForm
          // props
          img={img}
          isLogin={isLogin}
          srcImgDataBs64={srcImgDataBs64}
          textAreaValue={textAreaValue}
          isRequest={isRequest}
          error={error}
          // actions
          addPostActions={addPostActions}
        />
      )}
    </StyledSection>
  );
};

export default PostsField;
