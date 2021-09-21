import React from 'react'
import {connect} from 'react-redux'
import AdmProductCardComponent from '../../components/Admin/AdmProductCardComponent/AdmProductCardComponent'

class AdmProductCardContainer extends React.Component{
    render(){
        return(
            <AdmProductCardComponent {...this.props}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(AdmProductCardContainer)