import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  RESET,
  FLEX_COLUMN,
  BTN_COLOR_HEADER,
  searchProfileNameOfInCommentText,
  BTN_COLOR_HEADER_HOVER
} from '../../../const';

const PostBlockCommentsField = styled.section`
  padding: 0 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const CommentBlock = styled.div`
  ${FLEX_COLUMN};
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
  cursor: pointer;
`;

const FieldForActions = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 2rem;

  ${CommentText}:hover ~ & {
    display: flex;
  }

  &:hover {
    display: flex;
  }
`;

const ActionSpan = styled.span`
  padding: 0 0.7rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;

const ActionSpanAnswer = styled(ActionSpan)`
  color: ${BTN_COLOR_HEADER};

  &:hover {
    color: ${BTN_COLOR_HEADER_HOVER};
  }
`;

const ActionSpanDelete = styled(ActionSpan)`
  color: red;

  &:hover {
    color: #d50000;
  }
`;

const LinkToCommentedUserProfileName = styled(Link)`
  font-weight: 700;
  color: black;
`;

const Comments = ({
  //props
  postId,
  comments,
  profileNameOfAuthorizedUser,
  profileName,
  //actions
  newsOpenAnswerInput,
  newsDeleteComment
}) => (
  <PostBlockCommentsField>
    {comments.map(
      ({ id, profileName: profileNameOfCommentedUser, text, parents = [] }) => {
        const updatedParentsWithAddedId = [...parents];
        updatedParentsWithAddedId.push(id);

        const {
          cutProfileName,
          textWithoutProfileName
        } = searchProfileNameOfInCommentText(text);

        return (
          <CommentBlock key={id} style={{ marginLeft: `${parents.length}rem` }}>
            <CommentText>
              <CommentProfileName to={`/profile/${profileNameOfCommentedUser}`}>
                {profileNameOfCommentedUser}
              </CommentProfileName>
              {cutProfileName && (
                <LinkToCommentedUserProfileName
                  to={`/profile/${cutProfileName}`}
                >
                  {cutProfileName}
                </LinkToCommentedUserProfileName>
              )}

              {textWithoutProfileName ? textWithoutProfileName : text}
            </CommentText>
            <FieldForActions>
              <ActionSpanAnswer
                onClick={() =>
                  newsOpenAnswerInput({
                    postId,
                    profileName,
                    parents: updatedParentsWithAddedId,
                    idPrevComment: id
                  })
                }
              >
                Answer
              </ActionSpanAnswer>
              {profileNameOfAuthorizedUser === profileNameOfCommentedUser && (
                <ActionSpanDelete
                  onClick={() =>
                    newsDeleteComment({
                      profileName,
                      postId,
                      deletedCommentId: id,
                      profileNameOfAuthorizedUser
                    })
                  }
                >
                  Delete
                </ActionSpanDelete>
              )}
            </FieldForActions>
          </CommentBlock>
        );
      }
    )}
  </PostBlockCommentsField>
);

export default Comments;
