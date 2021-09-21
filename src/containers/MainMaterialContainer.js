import React from 'react'
import MainMaterialComponent from '../components/MainMaterialComponent/MainMaterialComponent'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
class MainMaterialContainer extends React.Component {
    render() {
        return (
            <MainMaterialComponent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainMaterialContainer)