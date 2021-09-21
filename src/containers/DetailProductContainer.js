import React from 'react'
import DetailProductComponent from '../components/DetailProductComponent/DetailProductComponent'
import {connect} from 'react-redux'

class DetailProductContainer extends React.Component{    
    render(){
        return(
            <DetailProductComponent {...this.props} currentProduct={JSON.parse(sessionStorage.getItem('currentProduct'))}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(DetailProductContainer)