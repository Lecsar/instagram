import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FLEX_ROW, RESET } from '../../../const';

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

const Comments = ({ comments }) => (
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
);

export default Comments;
