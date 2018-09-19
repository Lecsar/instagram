import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as newsActions from '../../actions/news-actions';
import * as loginActions from '../../actions/log-in-actions';
import * as userActions from '../../actions/userActions';

import { FLEX_COLUMN, FLEX_COLUMN_CENTER } from '../../const';

import Header from '../../components/userPage/header';
import Post from '../../components/news/post';

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
    this.props.newsActions.getNewsRequest('yurydud');
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
      newsReducer: { news },
      profilePhotoOfAuhorizedUser,
      // actions
      userActions: { onChangeSearchInput, onResetSearchInput },
      loginActions: { onLogOut }
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

    console.log(news);

    return (
      <MainBlock>
        {header}

        <NewsContainer>
          {news.map(
            // eslint-disable-next-line no-shadow
            ({ post: { _id: id, ...postInfo }, profilePhoto, profileName }) => {
              console.log(postInfo);

              return (
                <Post
                  key={id}
                  {...postInfo}
                  profileName={profileName}
                  profilePhoto={profilePhoto}
                />
              );
            }
          )}
        </NewsContainer>
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
