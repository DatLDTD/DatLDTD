import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import ProceedPaymentContainer from '../containers/ProceedPaymentContainer'


import './StylePages.scss'
class ProceedPaymentPage extends Component {
  render() {
    return (
      <div className="">
        <HeaderContainer />
        <ProceedPaymentContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default ProceedPaymentPage;