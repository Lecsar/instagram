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
    this.props.newsActions.getNewsRequest('naishuller');
  }

  render() {
    const {
      // props
      isLogin,
      userReducer: {
        user,
        currentPage: { searchField }
      },
      newsReducer: { news },
      // actions
      userActions: { onChangeSearchInput, onResetSearchInput },
      loginActions: { onLogOut }
    } = this.props;

    const profilePhoto = user && user.profilePhoto;

    console.log(news);

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

    return (
      <MainBlock>
        {header}

        <NewsContainer>
          {news.map(({ _id, ...itemData }) => (
            <Post key={_id} {...itemData} />
          ))}
        </NewsContainer>
      </MainBlock>
    );
  }
}

const mapStateToProps = ({ newsReducer, login: { isLogin }, userReducer }) => ({
  isLogin,
  userReducer,
  newsReducer
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
