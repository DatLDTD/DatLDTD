import React from 'react'
import ListProductComponent from '../components/ListProductComponent/ListProductComponent'
import * as actions from '../actions/index'
import * as constants from '../constants'
import { connect } from 'react-redux'
class ListProductContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad(constants.LIMIT_CUS)
    }
    render() {
        return (
            <ListProductComponent {...this.props}
                changePage={(index) => this.props.changePage(index)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listProduct: state.productState.listProduct,
        isLoading: state.productState.isLoading,
        totalPage: state.productState.totalPage,
        currentPage: state.productState.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: (payload) => {
            dispatch(actions.getAllProduct(payload))
        },
        changePage: (payload) => {
            dispatch(actions.changePageIndex(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProductContainer)