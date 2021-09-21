import React from 'react'
import * as constants from '../../constants'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcPaypal, faCcAmazonPay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent3 from '../ButtonComponent/Button3/ButtonComponent3'
import './StyleBasket.scss'

class BasketComponent extends React.Component {
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
            <div className="basket-page-container">
                <div className="title">
                    <span>my basket</span>
                    <span>( {total} )</span>
                </div>
                <div className="basket-page-wrapper">
                    <div className="list-item-container">
                        <div>items</div>
                        {listItem}
                    </div>
                    <div className="order">
                        <div className="order-summary">
                            <div>order summary</div>
                            <div>
                                <span>subtotal ({total} items)</span>
                                <span>${subtotal}</span>
                            </div>
                            <div>
                                <span>shipping & handling</span>
                                <span>free</span>
                            </div>
                            <div>
                                <span>tax</span>
                                <span>${subtotal / 10}</span>
                            </div>
                            <div>
                                <span>total</span>
                                <span>${subtotal + subtotal / 10}</span>
                            </div>
                        </div>
                        <div className="check-out">
                            <div className="button3-container" onClick={() => window.location.replace('/proceed-payment')}>
                                <ButtonComponent3 text="proceed to check out" />
                            </div>
                        </div>
                        <div className="policy">
                            <div>accepted payment methods</div>
                            <div className="vl">
                                <FontAwesomeIcon icon={faCcVisa} />
                                <FontAwesomeIcon icon={faCcMastercard} />
                                <FontAwesomeIcon icon={faCcAmex} />
                                <FontAwesomeIcon icon={faCcPaypal} />
                                <FontAwesomeIcon icon={faCcAmazonPay} />
                            </div>
                        </div>
                        <div className="policy">
                            <div>why shop with us?</div>
                            <div className="dm">
                                <div><FontAwesomeIcon icon={faCheck} /> <span>free delevery</span></div>
                                <div><FontAwesomeIcon icon={faCheck} /> <span>free return</span></div>
                                <div><FontAwesomeIcon icon={faCheck} /> <span>swiss made</span></div>
                                <div><FontAwesomeIcon icon={faCheck} /> <span>omega warranty</span></div>
                                <div><FontAwesomeIcon icon={faCheck} /> <span>secure payment</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketComponent