import React from 'react';
import styled from 'styled-components';
import {
  BORDER_COLOR,
  BORDER_COLOR_HOVER,
  TEXT_COLOR,
  ESCAPE_KEY_CODE,
  ENTER_KEY_CODE,
  createID
} from '../../../const';

const StyledCommentInput = styled.input`
  border: 1px solid ${BORDER_COLOR};
  height: 2.9rem;
  padding-left: 1rem;
  box-sizing: border-box;
  outline: none;
  font-size: 1.7rem;
  width: 100%;

  &:focus {
    border-color: ${BORDER_COLOR_HOVER};
  }

  &::placeholder {
    color: ${TEXT_COLOR};
  }
`;

/* eslint-disable no-return-assign */

class CommentInput extends React.Component {
  constructor() {
    super();

    this.keyDownActions = this.keyDownActions.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  keyDownActions(keyCode, text) {
    const {
      // props
      postId,
      profileName,
      isLogin,
      // actions
      closeInput,
      newsAddCommentRequest
    } = this.props;

    if (ESCAPE_KEY_CODE === keyCode) {
      closeInput();
    }

    if (ENTER_KEY_CODE === keyCode) {
      newsAddCommentRequest({
        postId,
        text,
        idOfComment: createID(),
        isLogin: isLogin || 'naishuller',
        profileName
      });
    }
  }

  render() {
    return (
      <StyledCommentInput
        type="text"
        placeholder="Comment..."
        innerRef={input => (this.input = input)}
        onKeyDown={({ keyCode, target: { value } }) => this.keyDownActions(keyCode, value)
        }
      />
    );
  }
}

export default CommentInput;
