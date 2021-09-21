import * as types from '../constants'

let DEFAULT_STATE = {
    listProduct: [],
    currentProduct: null,
    isLoading: false,
    errMessage: null,
    totalPage: null,
    currentPage: 1,
    totalProduct: 0,
    limit: 0,
    imgPath: null,
    listSuggest: [],
    listProductBasket: [],
    listBasket: [],
    addProduct: false,
    productAdd: null,
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        //up load img
        case (types.UPLOAD_IMAGE_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.UPLOAD_IMAGE_SUCCESS):
            return {
                ...state,
                isLoading: false,
                imgPath: action.payload
            }
        case (types.GET_PRODUCT_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }

        //get product
        case (types.GET_PRODUCT_REQUEST):
            return {
                ...state,
                isLoading: true,
                limit: action.payload
            }
        case (types.GET_PRODUCT_SUCCESS):
            return {
                ...state,
                isLoading: false,
                listProduct: action.payload.data,
                totalPage: action.payload.totalPage,
                totalProduct: action.payload.totalProduct
            }
        case (types.GET_PRODUCT_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        //add product
        case (types.ADD_PRODUCT_REQUEST):
            return {
                ...state,
                isLoading: true,
                addProduct: false
            }
        case (types.ADD_PRODUCT_SUCCESS):
            return {
                ...state,
                isLoading: false,
                productAdd: action.payload,
                addProduct: true
            }
        case (types.ADD_PRODUCT_FAILURE):
            return {
                ...state,
                isLoading: false,
                addProduct: false,
                errMessage: action.payload
            }
        // get suggest
        case (types.GET_SUGGEST_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.GET_SUGGEST_SUCCESS):
            return {
                ...state,
                isLoading: false,
                listSuggest: action.payload
            }
        case (types.GET_SUGGEST_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        //delete product
        case (types.DELETE_PRODUCT_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.DELETE_PRODUCT_SUCCESS):
            return {
                ...state,
                isLoading: false
            }
        case (types.DELETE_PRODUCT_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        //change page
        case (types.CHANGE_PAGE_REQUEST):
            return {
                ...state,
                isLoading: true,
                currentPage: action.payload
            }
        //get PRODUCT FOR BASKET
        case (types.GET_PRODUCT_FOR_BASKET_REQUEST):
            return {
                ...state,
                isLoading: true
            }
        case (types.GET_PRODUCT_FOR_BASKET_SUCCESS):
            return {
                ...state,
                isLoading: false,
                listProductBasket: action.payload
            }
        case (types.GET_PRODUCT_FOR_BASKET_FAILURE):
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload
            }
        default:
            return state
    }
}