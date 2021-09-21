import React from 'react'
import { connect } from 'react-redux'
import BasketComponent from '../components/BasketComponent/BasketComponent'
import * as actions from '../actions/index'
let listBasket = JSON.parse(sessionStorage.getItem('listBasket'))
if (listBasket == null) listBasket = []
class BasketContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad(listBasket)
    }
    render() {
        return (
            <BasketComponent {...this.props} listBasket={listBasket} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listProductBasket: state.productState.listProductBasket
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: (payload) => {
            dispatch(actions.getProductForBasket(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)