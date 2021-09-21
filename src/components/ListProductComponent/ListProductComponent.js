import React from 'react'
import './StyleListProduct.scss'
import CardProductContainer from '../../containers/CardProductContainer'
import PaginateComponent from '../PaginateComponent/PaginateComponent'
class ListProductComponent extends React.Component {
    render() {
        let listProduct = []
        if (this.props.listProduct) {
            listProduct = this.props.listProduct.map((product, key) => {
                return (
                    <div className="product-wrapper" key={key}>
                        <CardProductContainer product={product} />
                    </div>
                )
            })
        }
        return (
            <div className="list-product-container">
                {listProduct}
                <div className="paginate-container">
                    <PaginateComponent currentPage={this.props.currentPage} totalPage={this.props.totalPage} changePage={(index) => this.props.changePage(index)} />
                </div>
            </div>
        )
    }
}

export default ListProductComponent