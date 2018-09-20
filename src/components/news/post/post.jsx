import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  FLEX_COLUMN,
  RESET,
  BORDER_COLOR,
  FLEX_ROW_CENTER,
  IMG_STUB_LINK,
  SpinnerStyle
} from '../../../const';
import Comments from '../comments/comments';
import CommentInput from '../comment-input/commentInput';

const PostBlock = styled.div`
  ${FLEX_COLUMN};
  width: 60rem;
  background-color: white;
  border: 1px solid ${BORDER_COLOR};
  margin-top: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const PostBlockTop = styled.div`
  ${FLEX_ROW_CENTER};
  height: 6rem;
  padding-left: 1.5rem;
`;

const PostBlockTopImg = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
`;

const PostBlockTopGroup = styled.div`
  ${FLEX_COLUMN};
`;

const PostBlockTopProfileName = styled(Link)`
  font-size: 1.8rem;
  ${RESET};
  text-decoration: none;
  color: black;
`;

const PostBlockTopPlace = styled.h3`
  font-size: 1.3rem;
  ${RESET};
  padding-left: 1rem;
`;

const PostBlockImage = styled.img`
  max-width: 100%;
  max-height: 40rem;
`;

const PostMedia = styled.div`
  ${FLEX_ROW_CENTER};
  width: 100%;
  height: 4rem;
  padding-left: 1.5rem;
`;

const PostMediaIcon = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  background-size: cover;
  margin-right: 0.7rem;
  cursor: pointer;
`;

const PostMediaIconLike = styled(PostMediaIcon)`
  background-image: url('https://png.icons8.com/metro/1600/like.png');
`;

const PostMediaIconComment = styled(PostMediaIcon)`
  background-image: url('https://cdn4.iconfinder.com/data/icons/vectory-basic/40/comment_2-512.png');
`;

const PostBlockLikes = styled.div`
  padding-left: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const FieldForInput = styled.div`
  width: 100%;
  position: relative;
  padding: 0 1.5rem;
  box-sizing: border-box;
`;

const SpinnerForAddComment = styled(SpinnerStyle)`
  font-size: 0.2rem;
  left: 95%;
  top: 50%;
`;

/* eslint-disable no-shadow */

const Post = ({
  // props
  id,
  profileName,
  profilePhoto,
  likes,
  place,
  img = IMG_STUB_LINK,
  comments,
  shouldShowCommentInput,
  profileNameOfAuthorizedUser,
  isRequestAddComment,
  // actions
  toogleCommentInput,
  newsAddCommentRequest
}) => (
  <PostBlock>
    <PostBlockTop>
      <Link to={`profile/${profileName}`}>
        <PostBlockTopImg src={profilePhoto} alt="profileNamePhoto" />
      </Link>
      <PostBlockTopGroup>
        <PostBlockTopProfileName to={`profile/${profileName}`}>
          {profileName}
        </PostBlockTopProfileName>
        <PostBlockTopPlace>• {place}</PostBlockTopPlace>
      </PostBlockTopGroup>
    </PostBlockTop>
    <PostBlockImage src={img} alt="postImage" />
    <PostMedia>
      <PostMediaIconLike />
      <PostMediaIconComment onClick={toogleCommentInput} />
    </PostMedia>
    <PostBlockLikes>{likes.length} likes</PostBlockLikes>
    <Comments comments={comments} />

    {shouldShowCommentInput && (
      <FieldForInput>
        <CommentInput
          postId={id}
          profileName={profileName}
          isLogin={profileNameOfAuthorizedUser}
          // actions
          closeInput={toogleCommentInput}
          newsAddCommentRequest={newsAddCommentRequest}
        />
        {isRequestAddComment && <SpinnerForAddComment />}
      </FieldForInput>
    )}
  </PostBlock>
);

export default Post;
