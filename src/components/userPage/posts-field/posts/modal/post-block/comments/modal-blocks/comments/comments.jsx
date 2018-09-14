import React from 'react';

import {
  StyledComments,
  StyledText,
  StyledLink,
  StyledDiv,
  StyledBtn
} from './styled-components';

const CommentsBlock = ({
  // props
  comments,
  isLogin,
  // actions
  openTextInputForAnswer
}) => {
  const commentsBlock = comments.map(({
 id, profileName, text, parents 
}) => {
    const styleOfComment = {
      marginLeft: `${parents && parents.length * 10}px`
    };

    return (
      <div key={id}>
        <StyledComments style={styleOfComment}>
          <StyledText>
            <StyledLink to={`/profile/${profileName}`}>
              {profileName}
            </StyledLink>
            {text}
          </StyledText>
        </StyledComments>
        {isLogin && (
          <StyledBtn onClick={() => openTextInputForAnswer({ parents, id })}>
            Answer
          </StyledBtn>
        )}
      </div>
    );
  });

  return <StyledDiv>{commentsBlock}</StyledDiv>;
};

export default CommentsBlock;
