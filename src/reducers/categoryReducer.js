import * as types from '../constants'

let DEFAULT_STATE = {
    isLoading: null,
    listCategory: [],
    errMessage:null
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
         //get CATEGORY
         case (types.GET_CATEGORY_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.GET_CATEGORY_SUCCESS):
            return {
                ...state,
                isLoading: false,
                listCategory: action.payload
            }
        case (types.GET_CATEGORY_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        default:
            return state
    }
}