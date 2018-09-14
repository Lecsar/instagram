import React from 'react';
import styled from 'styled-components';

import textDecorate from './textDecorate';
import ProfileLink from './profile-link';

const StyledText = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const CommentText = ({ profileName, onResetOpenPostId, text }) => {
    const newText = textDecorate(text, onResetOpenPostId);

    return (
        <StyledText>
            <ProfileLink value={profileName} handler={onResetOpenPostId} />
            {newText}
        </StyledText>
    );
};

export default CommentText;
