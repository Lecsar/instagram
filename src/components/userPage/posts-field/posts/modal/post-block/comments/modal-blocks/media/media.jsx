import React from 'react';

import {
    StyledDiv,
    StyledGroup,
    StyledLikes,
    StyledLikesCounter,
    StyledDate
} from './styled-components';

const Media = ({ likes, date }) => (
    <StyledDiv>
        <StyledGroup>
            <StyledLikes>&#x2661;</StyledLikes>
            <StyledLikes>&#x2661;</StyledLikes>
        </StyledGroup>
        <StyledLikesCounter>{likes} likes</StyledLikesCounter>
        <StyledDate>{date}</StyledDate>
    </StyledDiv>
);

export default Media;
