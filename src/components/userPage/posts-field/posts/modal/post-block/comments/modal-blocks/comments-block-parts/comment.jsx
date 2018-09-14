import React from 'react';
import styled from 'styled-components';

import CommentText from './text/text';
import CommentBtns from './btns';

const StyledDiv = styled.div`
  font-size: 1.5rem;
  text-align: justify;
`;

const Comment = ({
    style,
    profileName,
    onResetOpenPostId,
    text,
    canShowBtns,
    isMyPage,
    openTextInputForAnswer
}) => (
    <StyledDiv style={style}>
        <CommentText
            profileName={profileName}
            onResetOpenPostId={onResetOpenPostId}
            text={text}
        />
        {canShowBtns && (
            <CommentBtns
                isMyPage={isMyPage}
                openTextInputForAnswer={openTextInputForAnswer}
            />
        )}
    </StyledDiv>
);

export default Comment;
