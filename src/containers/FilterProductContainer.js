import React from 'react'
import FilterProductComponent from '../components/FilterProductComponent/FilterProductComponent'
import {connect} from 'react-redux'
class FilterProductContainer extends React.Component{
    render(){
        return(
            <FilterProductComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        totalProduct: state.productState.totalProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterProductContainer)

