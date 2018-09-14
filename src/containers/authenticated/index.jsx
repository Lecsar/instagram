import React from 'react';
import { connect } from 'react-redux';
import { ROUTING } from '../../const';

const RequireAuthentication = (Component) => {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      // eslint-disable-next-line
      this.checkAuth(this.props.login.user);
    }

    componentWillReceiveProps({ login: { user } }) {
      this.checkAuth(user);
    }

    checkAuth(user) {
      if (!user) {
        // eslint-disable-next-line
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: 'replace',
            nextUrl: '/',
          },
        });
      }
    }

    render() {
      // const isShow = localStorage.getItem('isAuthorized');
      const {
        props: {
          login: { user: isShow },
        },
      } = this;

      return isShow ? <Component {...this.props} /> : <h1>NOT ACCESS</h1>;
    }
  }

  function mapStateToProps(state) {
    return {
      login: state.login,
    };
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default RequireAuthentication;
