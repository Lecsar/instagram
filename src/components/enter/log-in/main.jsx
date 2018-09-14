import React from 'react';
import PropTypes from 'prop-types';

import { EMAIL, PASSWORD } from '../../../const';

import { SignHeader } from '../signUp/block/sign-components';
import InputLogin from './input/input';
import {
  ErrorMessage,
  StyledLoginForm,
  StyledSignMain,
  StyledText,
  StyledLoginBtn,
  StyledLoginBtnUnActive,
  StyledSpinner
} from './styled-components';

const inputsData = [
  {
    id: 1,
    placeholder: 'Email',
    name: EMAIL
  },
  {
    id: 2,
    placeholder: 'Password',
    name: PASSWORD
  }
];

const LoginMain = ({
  // props
  login,
  // actions
  onChangeLoginInput,
  onClickLoginRequest
}) => {
  const {
 email, password, defaultView, loginRequest 
} = login;

  const [loginInput, passwordInput] = inputsData.map(
    ({ placeholder, name, id }) => (
      <InputLogin
        key={id}
        value={login[name]}
        placeholder={placeholder}
        type={name === PASSWORD ? 'password' : 'text'}
        onChange={({ target: { value } }) => onChangeLoginInput({ name, value })
        }
      />
    )
  );

  const errorMessage = (
    <ErrorMessage>
      Sorry, your password was incorrect. Please double-check your password.
    </ErrorMessage>
  );

  // логика для определения состояния кнопки
  const isBtnUnactive = defaultView || loginRequest;

  const onClickAction = (event) => {
    event.preventDefault();

    if (!isBtnUnactive) {
      onClickLoginRequest({ email, password });
    }
  };

  const btn = isBtnUnactive ? (
    <StyledLoginBtnUnActive onClick={onClickAction}>
      Login
    </StyledLoginBtnUnActive>
  ) : (
    <StyledLoginBtn onClick={onClickAction}>Login</StyledLoginBtn>
  );

  return (
    <StyledSignMain>
      <SignHeader />
      <StyledLoginForm>
        {loginInput}
        {passwordInput}
        {btn}
        {loginRequest && <StyledSpinner />}
        {login.showErrorMessage && errorMessage}
        <StyledText>Forgot password?</StyledText>
      </StyledLoginForm>
    </StyledSignMain>
  );
};

export default LoginMain;

LoginMain.propTypes = {
  login: PropTypes.object,
  onChangeLoginInput: PropTypes.func,
  onClickLoginRequest: PropTypes.func
};
