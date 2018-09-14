import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as signUpActions from '../../actions/sign-up-actions';

import SignUpBlock from '../../components/enter/signUp/block/signUpBlock';
import Login from '../../components/enter/signUp/log-in/login';
import AppBtns from '../../components/enter/app-btns/app-btns';
import Footer from '../../components/enter/footer/footer';
import { GetTheApp } from '../../components/enter/signUp/block/sign-components';
import { FLEX_COLUMN_CENTER } from '../../const';

const SignUp = ({
  signUp: { inputs, isDefaultView },
  // actions
  signUpActions: {
    onBlurSignInput,
    onResetDefaultView,
    onChangeInput,
    onClearInput
  }
}) => {
  const signUpBlock = (
    <SignUpBlock
      // props
      inputs={inputs}
      isDefaultView={isDefaultView}
      // actions
      onBlurSignInput={onBlurSignInput}
      onResetDefaultView={onResetDefaultView}
      onClearInput={onClearInput}
      onChangeInput={onChangeInput}
    />
  );

  const StyledMain = styled.main`
    ${FLEX_COLUMN_CENTER};
    margin-top: 3rem;
  `;

  return (
    <StyledMain>
      {signUpBlock}
      <Login />
      <GetTheApp />
      <AppBtns />
      <Footer />
    </StyledMain>
  );
};

const mapStateToProps = ({ signUp }) => ({
  signUp
});

const mapDispatchToProps = dispatch => ({
  signUpActions: bindActionCreators(signUpActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
