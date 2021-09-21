import { combineReducers } from 'redux'
import productReducer from './productReducer'
import billReducer from './billReducer'
import materialReducer from './materialReducer'
import collectionReducer from './collectionReducer'
import featureReducer from './featureReducer'
import categoryReducer from './categoryReducer'
export default combineReducers({
    productState:productReducer,
    billReducer: billReducer,
    materialState: materialReducer,
    collectionState: collectionReducer,
    featureState: featureReducer,
    categoryState: categoryReducer
});