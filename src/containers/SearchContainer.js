import React from 'react'
import SearchComponent from '../components/SearchComponent/SearchComponent'
import {connect} from 'react-redux'
class SearchContainer extends React.Component{
    render(){
        return(
            <SearchComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer)

