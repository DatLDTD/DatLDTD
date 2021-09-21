import React from 'react'
import ButtonComponent3 from '../ButtonComponent/Button3/ButtonComponent3'
import * as constants from '../../constants'

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './StyleBasketLite.scss'
class BasketLiteComponent extends React.Component {
    async deleteItemHandle(id) {
        let listBasket = []
        listBasket = await JSON.parse(sessionStorage.getItem('listBasket'))
        await listBasket.pop({ idProduct: id })
        await sessionStorage.setItem('listBasket', JSON.stringify(listBasket))
        window.location.reload();
    }
    render() {
        let subtotal = 0
        let total = 0
        this.props.listBasket.forEach(item => {
            total = total + item.quantity
        });
        console.log(this.props)
        let listItem = []
        if (this.props.listProductBasket) {
            listItem = this.props.listProductBasket.map((item, key) => {
                let qty
                let bracelet
                this.props.listBasket.forEach(ele => {
                    if (ele.idProduct == item[0]._id) {
                        qty = ele.quantity
                        bracelet = ele.bracelet
                    }
                })
                subtotal = subtotal + (item[0].productPrice - item[0].productPrice * item[0].productSale / 100) * qty
                return (
                    <div key={key}>
                        <div className="card-item-container">
                            <div className="img-item-wrapper">
                                <img alt='err' src={constants.LINK_IMAGE + item[0].productImage.Images.avatarImage} />
                            </div>
                            <div className="info-item-wrapper">
                                <p className="collection">{item[0].productCollection}</p>
                                <p>{item[0].productTechnicalData.Case} on {item[0].productTechnicalData.Bracelet}</p>
                                <p className="sub-collection">{item[0].productSubCollection}</p>
                                <p className="name">{item[0].productName} {item[0].productTechnicalData.CaseDiameter}</p>
                                <p className="quantity">Quantity: {qty}</p>
                                <p className="quantity">Bracelet: {bracelet} inches</p>
                                <div className="price">
                                    <span>${(item[0].productPrice - item[0].productPrice * item[0].productSale / 100) * qty}</span>
                                </div>
                            </div>
                            <div className="btn-delete-item" onClick={() => this.deleteItemHandle(item[0].idProduct)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="fake-item-border"></div>
                    </div>
                )
            })
        }
        return (
            <div className="basket-lite-container">
                { total != 0
                    ?
                    <>
                        <div className="title">
                            <span>my basket</span>
                            <span>( {total} )</span>
                        </div>
                        <div className="list-item-container">
                            {listItem}
                        </div>
                        <div className="sub-total-container">
                            <span>subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="button3-container" onClick={() => { window.location.replace('/basket') }}>
                            <ButtonComponent3 text="view basket" />
                        </div>
                    </>
                    :
                    <>
                        <div className="title">
                            <span>my basket</span>
                        </div>
                        <div className="notice">
                            You have 0 item in your basket
                        </div>

                        <div className="button3-container" onClick={() => { window.location.replace('/list-product') }}>
                            <ButtonComponent3 text="discover our watch" />
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default BasketLiteComponent