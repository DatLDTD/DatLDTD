import React from 'react'
import {connect} from 'react-redux'
import HeaderAdminComponent from '../../components/Admin/HeaderAdminComponent/HeaderAdminComponent'


class HeaderAdminContainer extends React.Component{
    render(){
        return(
            <HeaderAdminComponent {...this.props}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(HeaderAdminContainer)