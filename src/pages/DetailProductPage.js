import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import DetailProductContainer from '../containers/DetailProductContainer'


import './StylePages.scss'
class DetailProductPage extends Component {
  render() {
    return (
      <div className="">
        <HeaderContainer />
        <DetailProductContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default DetailProductPage;