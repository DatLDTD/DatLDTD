import React from 'react'

import { ChevronDown } from 'react-bootstrap-icons';

import './StyleFilterProduct.scss'

class FilterProductComponent extends React.Component {
    render() {
        return (
            <div className="filter-container">
                <div className="total-product-container">
                    <span>{this.props.totalProduct}</span>
                    <span>watches displayed</span>
                </div>
                <div className="filter-wrapper">
                    <h1>Filters</h1>
                    <div className="fake-boder"></div>
                    <div className="child">
                        <span>collection</span>
                        <ChevronDown />
                    </div>
                    <div className="fake-boder"></div>
                    <div className="child">
                        <span>selection</span>
                        <ChevronDown />
                    </div>
                    <div className="fake-boder"></div>
                    <div className="child">
                        <span>price</span>
                        <ChevronDown />
                    </div>
                    <div className="fake-boder"></div>
                    <div className="child">
                        <span>size</span>
                        <ChevronDown />
                    </div>
                    <div className="fake-boder"></div>
                    <div className="child">
                        <span>dial colour</span>
                        <ChevronDown />
                    </div>
                    <div className="fake-boder"></div>
                    <div className="child">
                        <span>features</span>
                        <ChevronDown />
                    </div>
                    <div className="fake-boder"></div>
                </div>
            </div>
        )
    }
}

export default FilterProductComponent