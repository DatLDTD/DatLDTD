import React from 'react'
import AddProductComponent from '../../components/Admin/AddProductComponent/AddProductComponent'
import * as actions from '../../actions/index'
import { connect } from 'react-redux'
class AddProductContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad()
    }
    render() {
        return (
            <AddProductComponent {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listCollection: state.collectionState.listCollection,
        listFeature: state.featureState.listFeature,
        listMaterial: state.materialState.listMaterial,
        listCategory: state.categoryState.listCategory,
        imgPath: state.productState.imgPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getCollection())
            dispatch(actions.getFeature())
            dispatch(actions.getMaterial())
            dispatch(actions.getCategory())
        },
        addProduct: (payload) => {
            dispatch(actions.addProduct(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer)