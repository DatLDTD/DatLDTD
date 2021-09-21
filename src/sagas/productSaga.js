import * as types from '../constants'
import * as method from '../constants'
import { takeEvery, put, select } from 'redux-saga/effects'
import callAPI from '../fetchAPIs/callAPI'

function* getAllProduct() {
    try {
        const productState = yield select((state) => state.productState)
        let res = yield callAPI(method.HTTP_READ, '/product?limit=' + productState.limit + '&pageindex=' + productState.currentPage, null)
        if (productState.currentPage > res.totalPage)
            res = yield callAPI(method.HTTP_READ, '/product?limit=' + productState.limit + '&pageindex=' + (productState.currentPage - 1), null)
        yield put({
            type: types.GET_PRODUCT_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_PRODUCT_FAILURE,
            payload: err
        })
    }
}

function* addProduct(action) {
    try {
        const productState = yield select((state) => state.productState)
        let res = yield callAPI(method.HTTP_CREATE, '/product', action.payload)
        yield put({
            type: types.ADD_PRODUCT_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_PRODUCT_REQUEST,
            payload: productState.limit
        })
    } catch (err) {
        yield put({
            type: types.ADD_PRODUCT_FAILURE,
            payload: err
        })
    }
}

function* getSuggest(action) {
    try {
        let res = yield callAPI(method.HTTP_READ, '/product-suggest?collection=' + action.payload, null)
        yield put({
            type: types.GET_SUGGEST_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_SUGGEST_FAILURE,
            payload: err
        })
    }
}

function* changePage() {
    try {
        const productState = yield select((state) => state.productState)
        let res = yield callAPI(method.HTTP_READ, '/product?limit=' + productState.limit + '&pageindex=' + productState.currentPage, null)
        yield put({
            type: types.GET_PRODUCT_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_PRODUCT_FAILURE,
            payload: err
        })
    }
}

function* deleteProduct(action) {
    try {
        const productState = yield select((state) => state.productState)
        let res = yield callAPI(method.HTTP_DELETE, '/product?_id=' + action.payload, null)
        yield put({
            type: types.DELETE_PRODUCT_SUCCESS,
            payload: res
        })
        yield put({
            type: types.GET_PRODUCT_REQUEST,
            payload: productState.limit
        })
    } catch (err) {
        yield put({
            type: types.DELETE_PRODUCT_FAILURE,
            payload: err
        })
    }
}

function* uploadImage(action) {
    try {
        let res = yield callAPI(method.HTTP_CREATE, '/upload-image', action.payload)
        yield put({
            type: types.UPLOAD_IMAGE_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.UPLOAD_IMAGE_FAILURE,
            payload: err
        })
    }
}

function* getProductBasket(action) {
    try {
        let listRes = []
        let list = action.payload
        console.log(list)
        for (let i = 0; i < list.length; i++) {
            let res = yield callAPI(method.HTTP_READ, '/product/' + list[i].idProduct, null)
            listRes.push(res)
        }
        yield put({
            type: types.GET_PRODUCT_FOR_BASKET_SUCCESS,
            payload: listRes
        })
    } catch (err) {
        yield put({
            type: types.GET_PRODUCT_FOR_BASKET_FAILURE,
            payload: err
        })
    }
}



export const productSaga = [
    takeEvery(types.GET_PRODUCT_REQUEST, getAllProduct),
    takeEvery(types.ADD_PRODUCT_REQUEST, addProduct),
    takeEvery(types.GET_SUGGEST_REQUEST, getSuggest),
    takeEvery(types.DELETE_PRODUCT_REQUEST, deleteProduct),
    takeEvery(types.CHANGE_PAGE_REQUEST, changePage),
    takeEvery(types.UPLOAD_IMAGE_REQUEST, uploadImage),
    takeEvery(types.GET_PRODUCT_FOR_BASKET_REQUEST, getProductBasket)
]