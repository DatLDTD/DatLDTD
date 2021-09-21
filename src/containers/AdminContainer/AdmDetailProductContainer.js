import React from 'react'
import AdmDetailProductComponent from '../../components/Admin/AdmDetailProductComponent/AdmDetailProductComponent'
import {connect} from 'react-redux'

class AdmDetailProductContainer extends React.Component{    
    render(){
        return(
            <AdmDetailProductComponent {...this.props} currentProduct={JSON.parse(sessionStorage.getItem('currentProduct'))}/>
        )
    }
}


const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdmDetailProductContainer)