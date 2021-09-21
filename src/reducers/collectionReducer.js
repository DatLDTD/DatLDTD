import * as types from '../constants'

let DEFAULT_STATE = {
    isLoading: null,
    listCollection: [],
    errMessage:null
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
         //get COLLECTION
         case (types.GET_COLLECTION_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.GET_COLLECTION_SUCCESS):
            return {
                ...state,
                isLoading: false,
                listCollection: action.payload
            }
        case (types.GET_COLLECTION_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        default:
            return state
    }
}