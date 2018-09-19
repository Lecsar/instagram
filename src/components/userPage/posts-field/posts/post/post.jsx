import React from 'react';

import {
  StyledPost,
  StyledImg,
  StyledBlock,
  StyledSpan,
  StyledIcon,
  StyledDialogIcon,
  DeleteIcon,
  Spinner
} from './styled-component';

import './style.css';

import { DELETE_TYPE } from '../../../../../const';

const Post = ({
  // props
  post: { likes, comments },
  img,
  onOpenPost,
  styleForSpinner,
  styleForDeleteIcon,
  // actions
  deletePost
}) => {
  const clickOnPost = (target) => {
    const isDeleteIcon = target.getAttribute('type') === DELETE_TYPE;

    if (!isDeleteIcon) {
      onOpenPost();
    }
  };

  return (
    <StyledPost onClick={({ target }) => clickOnPost(target)}>
      <Spinner style={styleForSpinner} />
      <StyledImg style={{ backgroundImage: `url(${img})` }} className="post" />
      <StyledBlock className="post-stub">
        <DeleteIcon style={styleForDeleteIcon} onClick={deletePost}>
          &times;
        </DeleteIcon>
        <StyledSpan>
          <StyledIcon>❤</StyledIcon>
          {likes.length}
        </StyledSpan>
        <StyledSpan>
          <StyledDialogIcon />
          {comments.length}
        </StyledSpan>
      </StyledBlock>
    </StyledPost>
  );
};

export default Post;
