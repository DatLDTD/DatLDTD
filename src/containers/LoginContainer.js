import React from 'react'
import LoginComponent from '../components/LoginComponent/LoginComponent'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
class LoginContainer extends React.Component {
    render() {
        return (
            <LoginComponent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)