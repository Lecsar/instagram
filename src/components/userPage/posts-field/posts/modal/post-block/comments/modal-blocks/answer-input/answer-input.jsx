import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  BTN_COLOR_HEADER,
  ESCAPE_KEY_CODE,
  ENTER_KEY_CODE,
  createID
} from '../../../../../../../../../const';

const StyledAnswer = styled.input`
  border: 3px solid ${BTN_COLOR_HEADER};
  outline: none;
  height: 3rem;
  width: 28.3rem;
  padding-left: 1rem;
`;

/* eslint-disable no-shadow, no-return-assign */

class AnswerInput extends React.Component {
  // для фокуса на инпуте добавления ответа на комментарий
  componentDidUpdate({ openAnswerInput: { currentID } }) {
    if (currentID >= 0) {
      this.focusedInput.focus();
    }
  }

  render() {
    const {
      // props
      answerStyle,
      openAnswerInput: { value, currentID, parentsComment },
      postId,
      isLogin,
      profileName,
      // actions
      answerOnComment,
      closeTextInputForAnswer,
      onChangeInputForAnswer
    } = this.props;

    const onKeyDownHandler = (keyCode) => {
      if (keyCode === ESCAPE_KEY_CODE) {
        closeTextInputForAnswer();
      }

      if (keyCode === ENTER_KEY_CODE) {
        let copyParentsComment;

        if (parentsComment) {
          copyParentsComment = [...parentsComment];
          copyParentsComment.push(currentID);
        } else {
          copyParentsComment = [currentID];
        }

        answerOnComment({
          postId,
          text: value,
          idOfComment: createID(),
          isLogin,
          profileName,
          parents: copyParentsComment,
          idPrevComment: currentID
        });
      }
    };

    return (
      <StyledAnswer
        style={answerStyle}
        value={value}
        onChange={({ target: { value } }) => onChangeInputForAnswer(value)}
        onKeyDown={({ keyCode }) => onKeyDownHandler(keyCode)}
        innerRef={input => (this.focusedInput = input)}
      />
    );
  }
}

AnswerInput.propTypes = {
  postId: PropTypes.number.isRequired,
  profileName: PropTypes.string.isRequired,
  closeTextInputForAnswer: PropTypes.func.isRequired,
  answerOnComment: PropTypes.func.isRequired,
  onChangeInputForAnswer: PropTypes.func.isRequired
};

export default AnswerInput;
