import React from 'react'

import AdmProductCardContainer from '../../../containers/AdminContainer/AdmProductCardContainer'
import PaginateComponent from '../../PaginateComponent/PaginateComponent'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StyleProductBoard.scss'
import AddProductContainer from '../../../containers/AdminContainer/AddProductContainer';
class ProductBoardComponent extends React.Component {
    state = {
        id: "",
        addProduct: false
    }
    btnNoOnclickHandle() {
        const filter = document.querySelector('.filter-div')
        filter.classList.remove('active')

        const confirmBox = document.querySelector('.confirm-box')
        confirmBox.classList.remove('active')
    }
    btnYesOnclickHandle() {

        this.props.deleteProduct(this.state.id)

        const filter = document.querySelector('.filter-div')
        filter.classList.remove('active')

        const confirmBox = document.querySelector('.confirm-box')
        confirmBox.classList.remove('active')


    }
    async addOnclick() {
        await this.setState({ addProduct: true });
        const filter = document.querySelector('.filter-div')
        filter.classList.add('active')
    }
    render() {
        let listProduct = []
        if (this.props.listProduct) {
            listProduct = this.props.listProduct.map((product, key) => {
                return (
                    <div key={key}>
                        <AdmProductCardContainer product={product} dispatchId={(id) => this.setState({ id: id })} />
                    </div>
                )
            })
        }
        return (
            <div className="product-board-container">
                {
                    this.state.addProduct === true
                        ?
                        <div className="add-product-container">
                            <AddProductContainer closeAddProduct={() => {
                                this.setState({ addProduct: false });
                                let filter = document.querySelector('.filter-div');
                                filter.classList.remove('active');
                            }} />
                        </div>
                        : null
                }
                <div className="confirm-box">
                    <span>Delete product with ID={this.state.id} ?</span>
                    <div className="btn-container">
                        <div className="confirm-btn btn-no" onClick={() => this.btnNoOnclickHandle()}>Cancle</div>
                        <div className="confirm-btn btn-yes" onClick={() => this.btnYesOnclickHandle()}>Delete</div>
                    </div>
                </div>
                <div className="upper-part">
                    <div>
                        <div className="total-product-wrapper">total: {this.props.totalProduct} products</div>
                        <div className="btn-add-container" onClick={() => this.addOnclick()}>
                            <FontAwesomeIcon icon={faPlusCircle} />
                            ADD
                        </div>
                    </div>
                    <div>
                        <span>Collection</span>
                        <select>
                            <option></option>
                            <option>Constellation</option>
                            <option>Seamaster</option>
                            <option>Speedmaster</option>
                            <option>De Ville</option>
                        </select>
                        <span>Price</span>
                        <select>
                            <option></option>
                            <option>1000</option>
                            <option>5000</option>
                            <option>10000</option>
                            <option>15000</option>
                        </select>
                    </div>
                </div>
                <div className="title-container">
                    <div className="id-tite center">ID</div>
                    <div className="image-title center">Image</div>
                    <div className="name-title left">Name</div>
                    <div className="collec-title left">Collection</div>
                    <div className="sub-collec-title left">SubCollection</div>
                    <div className="quantity-title center">Quantity</div>
                    <div className="sale-title center">Sale</div>
                    <div className="price-title center">Price</div>
                    <div className="action-title right">Actions</div>
                </div>
                {listProduct}
                <div className="paginate-container">
                    <PaginateComponent currentPage={this.props.currentPage} totalPage={this.props.totalPage} changePage={(index) => this.props.changePage(index)} />
                </div>

            </div>
        )
    }
}

export default ProductBoardComponent