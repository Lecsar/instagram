import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as userActions from '../../actions/userActions';
import * as loginActions from '../../actions/log-in-actions';
import * as answerActions from '../../actions/answer-actions';
import * as addPostActions from '../../actions/add-post-actions';
import * as deleteActions from '../../actions/delete-actions';

import Header from '../../components/userPage/header';
import Container from '../../components/userPage/container';

import { FLEX_COLUMN_CENTER, createID } from '../../const';
import { StyledSpinner, RequestStub } from './spinner';

const StyledMain = styled.main`
  ${FLEX_COLUMN_CENTER};
  width: 100%;
`;

/* eslint-disable no-shadow */

class User extends React.Component {
  // при первом рендере компонента(или переход напрямую через url)
  componentDidMount() {
    const {
      props: {
        userActions: { onRequestUserData },
        pageInfo: { currentProfileName },
        userReducer: { user }
      }
    } = this;

    // правило, которое отрабатывает при успешной авторизации
    // (перекидывает на страницу пользователя и не вызывает лишний запрос на сервер)
    if (!user) {
      onRequestUserData(currentProfileName);
    }

    // убрать
    this.props.loginActions.onClickLoginRequest({
      email: '2',
      password: '0'
    });
  }

  // при обновлении компонента (переход по ссылкам и т.д)
  componentDidUpdate({ pageInfo: { currentProfileName: prevProfileName } }) {
    const {
      props: {
        pageInfo: { currentProfileName },
        userActions: { onRequestUserData }
      }
    } = this;

    // если поменялась страница пользователя
    if (prevProfileName !== currentProfileName) {
      onRequestUserData(currentProfileName);
    }
  }

  render() {
    const {
      // props
      pageInfo: {
 isLogin, currentProfileName, isMyPage, answer 
},
      userReducer: {
        user,
        currentPage: { openPostId, searchField, commentFieldValue },
        isLoadingRequest,
        isError
      },
      addPostReducer,
      deleteReducer,
      // actions
      userActions: {
        onOpenPost,
        onClosePost,
        onChangePost,
        onResetOpenPostId,
        onChangeSearchInput,
        onResetSearchInput,
        onChangeCommentLine,
        toggleFollowOnUserRequest
      },
      answerActions: {
        openTextInputForAnswer,
        onChangeInputForAnswer,
        answerOnComment,
        closeTextInputForAnswer,
        addComment
      },
      loginActions: { onLogOut },
      addPostActions,
      deleteActions
    } = this.props;

    const profilePhoto = user && user.profilePhoto;

    const header = (
      <Header
        // props
        searchField={searchField}
        isLogin={isLogin}
        profilePhoto={profilePhoto}
        // actions
        onChangeSearchInput={onChangeSearchInput}
        onLogOut={onLogOut}
        onResetSearchInput={onResetSearchInput}
      />
    );

    const container = (
      <Container
        // props
        user={user}
        openPostId={openPostId}
        isLogin={isLogin}
        commentFieldValue={commentFieldValue}
        isMyPage={isMyPage}
        openAnswerInput={answer}
        addPostReducer={addPostReducer}
        deleteReducer={deleteReducer}
        // actions
        onOpenPost={onOpenPost}
        onClosePost={onClosePost}
        onChangePost={onChangePost}
        onResetOpenPostId={onResetOpenPostId}
        onChangeCommentLine={onChangeCommentLine}
        addComment={() => addComment({
            isLogin,
            profileName: currentProfileName,
            postId: openPostId,
            text: commentFieldValue,
            idOfComment: createID()
          })
        }
        openTextInputForAnswer={openTextInputForAnswer}
        onChangeInputForAnswer={onChangeInputForAnswer}
        answerOnComment={answerOnComment}
        closeTextInputForAnswer={closeTextInputForAnswer}
        addPostActions={addPostActions}
        deleteActions={deleteActions}
        toggleFollowOnUserRequest={toggleFollowOnUserRequest}
      />
    );

    // заглушка на странице(прозрачная со спиннером, либо с сообщением об ошибке),
    // которая не дает возможности нажимать на кнопки
    const requestOrErrorWindowStub = (
      <RequestStub>
        {isLoadingRequest ? <StyledSpinner /> : <h1>ERROR: {isError}</h1>}
      </RequestStub>
    );

    return (
      <StyledMain>
        {/* Показываем заглушку в 2 случаях:ожидаем ответ от сервера (спиннер)
        или при возникновении ошибки на сервере(сообщение об ошибке) */}
        {(isLoadingRequest || isError) && requestOrErrorWindowStub}
        {header}
        {/* правило для первого рендера, когда user=null */}
        {user && container}
      </StyledMain>
    );
  }
}

const mapStateToProps = (
  // деструктуризация state
  {
    userReducer,
    answer,
    addPostReducer,
    login: { user: isLogin },
    deleteReducer
  },
  {
    match: {
      params: { profileName: currentProfileName }
    }
  }
) => ({
  pageInfo: {
    isLogin,
    currentProfileName,
    isMyPage: isLogin === currentProfileName,
    answer
  },
  userReducer,
  addPostReducer,
  deleteReducer
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
  loginActions: bindActionCreators(loginActions, dispatch),
  answerActions: bindActionCreators(answerActions, dispatch),
  addPostActions: bindActionCreators(addPostActions, dispatch),
  deleteActions: bindActionCreators(deleteActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
