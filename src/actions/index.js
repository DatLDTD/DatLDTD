import * as types from '../constants'

export function getAllProduct(payload) {
    return ({
        type: types.GET_PRODUCT_REQUEST,
        payload: payload
    })
}

export function addProduct(payload) {
    return ({
        type: types.ADD_PRODUCT_REQUEST,
        payload: payload
    })
}

export function getSuggest(payload) {
    return ({
        type: types.GET_SUGGEST_REQUEST,
        payload: payload
    })
}

export function deleteProduct(payload) {
    return ({
        type: types.DELETE_PRODUCT_REQUEST,
        payload: payload
    })
}

export function changePageIndex(payload) {
    return ({
        type: types.CHANGE_PAGE_REQUEST,
        payload: payload
    })
}

export function getCollection() {
    return ({
        type: types.GET_COLLECTION_REQUEST,
    })
}

export function getFeature() {
    return ({
        type: types.GET_FEATURE_REQUEST,
    })
}

export function getMaterial() {
    return ({
        type: types.GET_MATERIAL_REQUEST,
    })
}

export function getCategory() {
    return ({
        type: types.GET_CATEGORY_REQUEST,
    })
}

export function getProductForBasket(payload) {
    return ({
        type: types.GET_PRODUCT_FOR_BASKET_REQUEST,
        payload: payload
    })
}

export function addBill(payload) {
    return ({
        type: types.ADD_BILL_REQUEST,
        payload: payload
    })
}

export function getBill() {
    return ({
        type: types.GET_BILL_REQUEST,
    })
}

export function uploadImage(payload) {
    return ({
        type: types.UPLOAD_IMAGE_REQUEST,
        payload: payload
    })
}
