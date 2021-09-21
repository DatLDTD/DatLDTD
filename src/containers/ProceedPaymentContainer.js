import React from 'react'
import ProceedPaymentComponent from '../components/ProceedPaymentComponent/ProceedPaymentComponent'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
let listBasket = JSON.parse(sessionStorage.getItem('listBasket'))
if (listBasket == null) listBasket = []
class ProceedPaymentContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad(listBasket)
    }
    render() {
        return (
            <ProceedPaymentComponent {...this.props} listBasket={listBasket} />
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
        },
        addBill: (payload) =>{
            dispatch(actions.addBill(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProceedPaymentContainer)