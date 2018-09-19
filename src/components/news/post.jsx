import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  FLEX_COLUMN,
  RESET,
  BORDER_COLOR,
  FLEX_ROW_CENTER,
  FLEX_ROW,
  IMG_STUB_LINK
} from '../../const';

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

const PostBlockCommentsField = styled.section`
  padding: 0 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const CommentBlock = styled.div`
  ${FLEX_ROW};
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const CommentProfileName = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  margin-right: 0.6rem;
`;

const CommentText = styled.p`
  ${RESET};
  width: 100%;
  text-align: justify;
`;

/* eslint-disable no-shadow */

const Post = ({
  profileName,
  profilePhoto,
  likes,
  place,
  img = IMG_STUB_LINK,
  comments
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
      <PostMediaIconComment />
    </PostMedia>
    <PostBlockLikes>{likes} likes</PostBlockLikes>
    <PostBlockCommentsField>
      {comments.map(({
 _id: id, profileName, text, parents = [] 
}) => (
        <CommentBlock key={id} style={{ marginLeft: `${parents.length}rem` }}>
          <CommentText>
            <CommentProfileName to={`/profile/${profileName}`}>
              {profileName}
            </CommentProfileName>
            {text}
          </CommentText>
        </CommentBlock>
      ))}
    </PostBlockCommentsField>
  </PostBlock>
);

export default Post;
