import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import SliderComponent from '../components/SliderComponent/SliderComponent'

class SliderContainer extends React.Component{
    componentDidMount(){
        this.props.innitLoad(this.props.collection)
    }
    render(){
        return(
            <SliderComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        listSuggest: state.productState.listSuggest
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        innitLoad: (payload) =>{
            dispatch(actions.getSuggest(payload))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SliderContainer)