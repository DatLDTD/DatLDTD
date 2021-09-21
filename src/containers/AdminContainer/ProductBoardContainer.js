import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import * as constants from '../../constants'
import ProductBoardComponent from '../../components/Admin/ProductBoardComponent/ProductBoardComponent'

class ProductBoardContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad(constants.LIMIT_ADM)
    }
    render() {
        return (
            <ProductBoardComponent  {...this.props}
                deleteProduct={(id) => this.props.deleteProduct(id)}
                changePage={(index) => this.props.changePage(index)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listProduct: state.productState.listProduct,
        totalPage: state.productState.totalPage,
        currentPage: state.productState.currentPage,
        totalProduct: state.productState.totalProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: (payload) => {
            dispatch(actions.getAllProduct(payload))
        },
        deleteProduct: (payload) => {
            dispatch(actions.deleteProduct(payload))
        },
        changePage: (payload) => {
            dispatch(actions.changePageIndex(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductBoardContainer)