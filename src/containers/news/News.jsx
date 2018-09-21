import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as newsActions from '../../actions/news-actions';
import * as loginActions from '../../actions/log-in-actions';
import * as userActions from '../../actions/userActions';

import { FLEX_COLUMN, FLEX_COLUMN_CENTER } from '../../const';

import Header from '../../components/userPage/header';
import Post from '../../components/news/post/post';

const MainBlock = styled.main`
  ${FLEX_COLUMN_CENTER};
`;

const NewsContainer = styled.section`
  ${FLEX_COLUMN};
  width: 60rem;
`;

class News extends React.Component {
  componentDidMount() {
    // const { profileNameOfAuthorizedUser } = this.props;

    // if (profileNameOfAuthorizedUser) {
    this.props.newsActions.getNewsRequest('naishuller');
    // }
  }

  render() {
    const {
      // props
      profileNameOfAuthorizedUser,
      userReducer: {
        // user,
        currentPage: { searchField }
      },
      newsReducer: {
        news,
        idOpenCommentField,
        isRequestAddComment,
        commentInputValue,
        idPrevComment,
        parents
      },
      profilePhotoOfAuhorizedUser,
      // actions
      userActions: { onChangeSearchInput, onResetSearchInput },
      loginActions: { onLogOut },
      newsActions: {
        toogleCommentInput,
        newsAddCommentRequest,
        newsToogleLikeRequest,
        newsOpenAnswerInput,
        newsDeleteComment
      }
    } = this.props;

    const header = (
      <Header
        // props
        searchField={searchField}
        isLogin={profileNameOfAuthorizedUser}
        profilePhoto={profilePhotoOfAuhorizedUser}
        // actions
        onChangeSearchInput={onChangeSearchInput}
        onLogOut={onLogOut}
        onResetSearchInput={onResetSearchInput}
      />
    );

    const newsBlocks = news.map(
      ({ post: { id, likes, ...postInfo }, profilePhoto, profileName }) => {
        const shouldShowCommentInput = idOpenCommentField === id;
        const isAuthorizedUserLikeThisPost = !!likes.find(
          profileName => profileName === profileNameOfAuthorizedUser
        );

        return (
          <Post
            // props
            key={id}
            id={id}
            profileNameOfAuthorizedUser={profileNameOfAuthorizedUser}
            amountLikes={likes.length}
            isAuthorizedUserLikeThisPost={isAuthorizedUserLikeThisPost}
            {...postInfo}
            profileName={profileName}
            profilePhoto={profilePhoto}
            shouldShowCommentInput={shouldShowCommentInput}
            isRequestAddComment={isRequestAddComment}
            commentInputValue={commentInputValue}
            idPrevComment={idPrevComment}
            parents={parents}
            // actions
            toogleCommentInput={() => {
              toogleCommentInput(!(idOpenCommentField === id) && id);
            }}
            newsAddCommentRequest={newsAddCommentRequest}
            toogleLike={() =>
              newsToogleLikeRequest({
                profileName,
                postId: id,
                profileNameWhoSetLike: profileNameOfAuthorizedUser,
                isSetLike: !isAuthorizedUserLikeThisPost
              })
            }
            newsOpenAnswerInput={newsOpenAnswerInput}
            newsDeleteComment={newsDeleteComment}
          />
        );
      }
    );

    return (
      <MainBlock>
        {header}
        <NewsContainer>{newsBlocks}</NewsContainer>
      </MainBlock>
    );
  }
}

const mapStateToProps = ({
  newsReducer,
  login: { user: profileNameOfAuthorizedUser, profilePhotoOfAuhorizedUser },
  userReducer
}) => ({
  profileNameOfAuthorizedUser,
  userReducer,
  newsReducer,
  profilePhotoOfAuhorizedUser
});

const mapDispatchToProps = dispatch => ({
  newsActions: bindActionCreators(newsActions, dispatch),
  loginActions: bindActionCreators(loginActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
