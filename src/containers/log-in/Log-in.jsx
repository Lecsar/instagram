import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from '../../actions/log-in-actions';

import LoginMain from '../../components/enter/log-in/main';
import AppBtns from '../../components/enter/app-btns/app-btns';
import { GetTheApp } from '../../components/enter/signUp/block/sign-components';
import Footer from '../../components/enter/footer/footer';

import {
  StyledMain,
  StyledDiv,
  StyledText,
  StyledLink
} from './styled-components';

const Login = ({
  login,
  // actions
  loginActions: { onChangeLoginInput, onClickLoginRequest }
}) => {
  const loginMain = (
    <LoginMain
      // props
      login={login}
      // actions
      onChangeLoginInput={onChangeLoginInput}
      onClickLoginRequest={onClickLoginRequest}
    />
  );

  return (
    <StyledMain>
      {loginMain}
      <StyledDiv>
        <StyledText>
          Don't have an account?
          <StyledLink to="/signup">Sign up</StyledLink>
        </StyledText>
      </StyledDiv>
      <GetTheApp />
      <AppBtns />
      <Footer />
    </StyledMain>
  );
};

const mapStateToProps = ({ login }) => ({
  login
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
