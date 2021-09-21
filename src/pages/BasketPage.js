import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import BasketContainer from '../containers/BasketContainer'


import './StylePages.scss'
class BasketPage extends Component {
  render() {
    return (
      <div className="">
        <HeaderContainer />
        <BasketContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default BasketPage;