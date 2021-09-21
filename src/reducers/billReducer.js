import * as types from '../constants'

let DEFAULT_STATE = {
    listBill: [],
    addBill: false,
    billAdd: null
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        //add bill
        case (types.ADD_BILL_REQUEST):
            return {
                ...state,
                isLoading: true,
                addBill: false
            }
        case (types.ADD_BILL_SUCCESS):
            return {
                ...state,
                isLoading: false,
                billAdd: action.payload,
                addBill: true
            }
        case (types.ADD_BILL_FAILURE):
            return {
                ...state,
                isLoading: false,
                addBill: false,
                errMessage: action.payload
            }
        default:
            return state
    }
}