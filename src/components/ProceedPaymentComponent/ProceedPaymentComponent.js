import React from 'react'
import * as constants from '../../constants'
import ButtonComponent3 from '../ButtonComponent/Button3/ButtonComponent3'
import './StyleProceed.scss'

class ProceedPaymentComponent extends React.Component {
    state = {
        name: "",
        phone: "",
        add: "",
        listBasket: this.props.listBasket,
        total: ""
    }
    async orderClick(subtotal) {
        await this.setState({ total: subtotal + subtotal / 10 })
        let bill = {
            name: this.state.name,
            phoneNumber: this.state.phone,
            address: this.state.add,
            listItem: this.state.listBasket,
            total: this.state.total
        }
        this.props.addBill(bill)
        window.location.replace('/basket')
    }
    render() {

        let subtotal = 0
        let total = 0
        this.props.listBasket.forEach(item => {
            total = total + item.quantity
        });

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
                        </div>
                        <div className="fake-item-border"></div>
                    </div>
                )
            })
        }
        return (
            <div className="proceed-container">
                <div className="detail-bill">
                    <div className="title">
                        shipping
                    </div>
                    <div>
                        <span>Name:</span>
                        <input type="text" onChange={(e) => this.setState({ name: e.target.value })}></input>
                    </div>
                    <div>
                        <span>Phone number:</span>
                        <input type="text" onChange={(e) => this.setState({ phone: e.target.value })}></input>
                    </div>
                    <div>
                        <span>Address:</span>
                        <input type="text" onChange={(e) => this.setState({ add: e.target.value })}></input>
                    </div>
                    <div className="button3-container" onClick={() => this.orderClick(subtotal)}>
                        <ButtonComponent3 text="order" />
                    </div>
                </div>
                <div className="list-item-container">
                    <div>total: ${subtotal + subtotal / 10}</div>
                    {listItem}
                </div>
            </div>
        )
    }
}

export default ProceedPaymentComponent