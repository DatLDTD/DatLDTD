import React from 'react'
import HeaderComponent from '../components/Header/HeaderComponent'
import {connect} from 'react-redux'
class HeaderContainer extends React.Component{
    render(){
        return(
            <HeaderComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
    }
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)

