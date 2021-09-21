import React from 'react'
import ButtonComponent1 from '../ButtonComponent/Button1/ButtonComponent1'

import './StyleCardProduct.scss'
import * as constants from '../../constants'
class CardProductComponent extends React.Component {
    render() {
        return (
            <div className="card-container">
                <div className="sale-container">
                    <span>-{this.props.product.productSale}%</span>
                </div>
                <div className="card-wrapper">
                    <div className="img-container">
                        <img alt="err" src={constants.LINK_IMAGE+this.props.product.productImage.Images.avatarImage}></img>
                    </div>
                    <div className="sub-collection-container">
                        <span>{this.props.product.productSubCollection}</span>
                    </div>
                    <div className="name-container">
                        <span>{this.props.product.productName} {this.props.product.productTechnicalData.CaseDiameter}</span>
                    </div>
                    <div className="price-container">
                        <span>${this.props.product.productPrice}</span>
                    </div>
                    <a href="/detail-product" onClick={() => {
                        sessionStorage.setItem('currentProduct', JSON.stringify(this.props.product))
                    }}>
                        <div className="button-container">
                            <ButtonComponent1 text="details" onClick={() => { this.props.getProductDetail(this.props) }} />
                        </div>
                    </a>
                </div>

            </div>
        )
    }
}

export default CardProductComponent