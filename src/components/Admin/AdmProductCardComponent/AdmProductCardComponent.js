import React from 'react'
import { faEllipsisH, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './StyleProductCard.scss'
import * as constants from '../../../constants'
class AdmProductCardComponent extends React.Component {
    deleteOnclickHandle() {
        const filter = document.querySelector('.filter-div')
        filter.classList.add('active')

        const confirmBox = document.querySelector('.confirm-box')
        confirmBox.classList.add('active')
        this.props.dispatchId(this.props.product._id)
    }
    render() {
        return (
            <div className="adm-product-card-container">
                <div className="id-wrapper id-tite center">
                    <span>{this.props.product._id}</span>
                </div>
                <div className="image-wrapper image-title center">
                    <img alt="err" src={constants.LINK_IMAGE+this.props.product.productImage.Images.avatarImage} />
                </div>
                <div className="name-wrapper name-title left">
                    <span>{this.props.product.productName}</span>
                </div>
                <div className="collection-wrapper collec-title left">
                    <span>{this.props.product.productCollection}</span>
                </div>
                <div className="sub-collection-wrapper sub-collec-title left">
                    <span>{this.props.product.productSubCollection}</span>
                </div>
                <div className="quantity-wrapper quantity-title center">
                    <span>{this.props.product.productQuantity}</span>
                </div>
                <div className="size-wrapper sale-title center">
                    <span>{this.props.product.productSale}</span>
                </div>
                <div className="price-wrapper price-title center">
                    <span>{this.props.product.productPrice}</span>
                </div>
                <div className="action-wrapper action-title right">
                    <div className="product-icon-wrapper icon-detail"><FontAwesomeIcon icon={faEllipsisH} /></div>
                    <div className="product-icon-wrapper icon-update"><FontAwesomeIcon icon={faPen} /></div>
                    <div className="product-icon-wrapper icon-delete" onClick={() => this.deleteOnclickHandle()}><FontAwesomeIcon icon={faTimes} /></div>
                </div>
            </div>
        )
    }
}

export default AdmProductCardComponent