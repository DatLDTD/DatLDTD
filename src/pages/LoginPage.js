import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import PMVCLoginComponent from '../components/PMVCComponent/PMVCLoginComponent'
class LoginPage extends Component {
  render() {
    return (
      <div >
        <HeaderContainer />
        <PMVCLoginComponent />
        <div className="page-body-container login-page-body-container">
          <h1>my omega</h1>
          <p>To contact us, simply login. If you are not already registered, please create a new My OMEGA account.</p>
          <LoginContainer />
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default LoginPage;