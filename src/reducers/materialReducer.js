import * as types from '../constants'

let DEFAULT_STATE = {
    isLoading: null,
    listMaterial:[],
    errMessage:null
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        //get MATERIAL
        case (types.GET_MATERIAL_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.GET_MATERIAL_SUCCESS):
            return {
                ...state,
                isLoading: false,
                listMaterial: action.payload
            }
        case (types.GET_MATERIAL_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        default:
            return state
    }
}