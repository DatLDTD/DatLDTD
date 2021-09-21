import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import * as constants from '../../constants'
import BillBoardComponent from '../../components/Admin/BillBoardComponent/BillBoardComponent'

class BillBoardContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad(constants.LIMIT_ADM)
    }
    render() {
        return (
            <BillBoardComponent  {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            // dispatch(actions.getAllBill())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillBoardContainer)