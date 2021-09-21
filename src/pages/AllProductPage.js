import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import FilterProductContainer from '../containers/FilterProductContainer'
import ListProductContainer from '../containers/ListProductContainer'
import SearchContainer from '../containers/SearchContainer'
import PMVCWatchFinderComponent from '../components/PMVCComponent/PMVCWatchFinderComponent'
import './StylePages.scss'
class AllProductPage extends Component {
  render() {
    return (
      <div className="">
        <HeaderContainer />
        <PMVCWatchFinderComponent />
        <div className="page-body-container">
          <SearchContainer />
          <div className="all-product-container">
            <FilterProductContainer/>
            <ListProductContainer />
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default AllProductPage;