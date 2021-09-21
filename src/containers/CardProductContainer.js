import React from 'react'
import CardProductComponent from '../components/CardProductComponent/CardProductComponent'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
class CardProductContainer extends React.Component {
    render() {
        return (
            <CardProductComponent {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProductContainer)