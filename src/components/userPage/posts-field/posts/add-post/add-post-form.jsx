import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  BTN_COLOR_HEADER,
  BTN_COLOR_HEADER_HOVER,
  INPUT_BACKGROUND_COLOR,
  INPUT_BORDER_COLOR,
  INPUT_TEXT_COLOR,
  SpinnerStyle,
  BTN_COLOR_UNACTIVE
} from '../../../../../const';
import FileInput from './file-input';

const body = document.getElementById('body');

const StyledAddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
`;

const StyledCloseWindow = styled.div`
  position: absolute;
  right: 1%;
  font-size: 3rem;
  color: ${BTN_COLOR_HEADER};
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${BTN_COLOR_HEADER_HOVER};
  }
`;

const StyledFormName = styled.h1`
  text-align: center;
  font-size: 2.7rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledImgPreview = styled.img`
  max-width: 35rem;
  max-height: 20rem;
  border-radius: 5px;
  box-shadow: 10px 11px 23px -8px rgba(0, 0, 0, 0.75);
`;

const StyledTextAreaForComment = styled.textarea`
  border: 1px solid ${INPUT_BORDER_COLOR};
  width: 100%;
  background-color: ${INPUT_BACKGROUND_COLOR};
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  height: 15rem;
  outline: none;
  border-radius: 5px;
  padding-left: 1rem;
  padding-top: 0.5rem;
  box-sizing: border-box;
  color: ${INPUT_TEXT_COLOR};
  font-size: 1.6rem;
`;

const StyledAddBtn = styled.button`
  font-size: 2.5rem;
  background-color: ${BTN_COLOR_HEADER};
  border: 0;
  color: white;
  padding: 0.8rem;
  border-radius: 5px;
  cursor: ${({ theme: { isRequest } }) => (isRequest ? 'not-allowed' : 'pointer')};
  outline: none;
  margin-bottom: 1.5rem;

  background-color: ${({ theme: { isRequest } }) => (isRequest ? BTN_COLOR_UNACTIVE : BTN_COLOR_HEADER)};

  &:hover {
    background-color: ${BTN_COLOR_HEADER_HOVER};
  }
`;

const Spinner = styled(SpinnerStyle)`
  font-size: 0.4rem;
  top: 93%;
`;

/* eslint-disable no-return-assign */

class AddrPostForm extends React.Component {
  constructor() {
    super();

    this.blackWrapper = document.createElement('div');
    this.blackWrapper.classList.add('black-wrapper');
    this.loadDataOnServer = this.loadDataOnServer.bind(this);
  }

  componentDidMount() {
    body.appendChild(this.blackWrapper);
  }

  componentWillUnmount() {
    body.removeChild(this.blackWrapper);
  }

  loadDataOnServer(event) {
    event.preventDefault();

    const { img } = this.props;
    const {
      textAreaValue: text,
      isLogin,
      addPostActions: { addPostRequestData }
    } = this.props;

    addPostRequestData({
      img,
      text,
      isLogin
    });
  }

  render() {
    const {
      srcImgDataBs64,
      textAreaValue,
      isRequest,
      addPostActions: {
        addPostToggleField,
        changeAddPostTextareaValue,
        showAddPostImgPreview
      }
    } = this.props;

    return ReactDOM.createPortal(
      <StyledAddForm>
        <StyledCloseWindow onClick={addPostToggleField}>
          &times;
        </StyledCloseWindow>
        <StyledFormName>Form for adding a new post</StyledFormName>
        {srcImgDataBs64 && (
          <StyledImgPreview src={srcImgDataBs64} alt="preImg" />
        )}
        <StyledTextAreaForComment
          placeholder="Enter your comment"
          value={textAreaValue}
          onChange={({ target: { value } }) => changeAddPostTextareaValue(value)
          }
        />
        <FileInput showAddPostImgPreview={showAddPostImgPreview} />
        <StyledAddBtn theme={{ isRequest }} onClick={this.loadDataOnServer}>
          Add post
        </StyledAddBtn>
        {isRequest && <Spinner />}
      </StyledAddForm>,
      this.blackWrapper
    );
  }
}

export default AddrPostForm;
