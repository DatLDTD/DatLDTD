import * as types from '../constants'

let DEFAULT_STATE = {
    isLoading: null,
    listFeature: [],
    errMessage: null
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        //get FEATURE
        case (types.GET_FEATURE_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.GET_FEATURE_SUCCESS):
            return {
                ...state,
                isLoading: false,
                listFeature: action.payload
            }
        case (types.GET_FEATURE_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        default:
            return state
    }
}