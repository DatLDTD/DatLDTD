import React from 'react'
import FooterComponent from '../components/Footer/FooterComponent'
import {connect} from 'react-redux'
class FooterContainer extends React.Component{
    render(){
        return(
            <FooterComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(FooterContainer)

