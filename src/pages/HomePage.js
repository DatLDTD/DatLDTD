import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import CarouselComponent from '../components/CarouselComponent/CarouselComponent'
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <HeaderContainer />
        <CarouselComponent />
        <FooterContainer />
      </div>
    );
  }
}

export default HomePage;
