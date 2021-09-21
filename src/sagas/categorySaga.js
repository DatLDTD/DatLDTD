import * as types from '../constants'
import * as method from '../constants'
import { takeEvery, put, select } from 'redux-saga/effects'
import callAPI from '../fetchAPIs/callAPI'

function* getCategory() {
    try {
        let res = yield callAPI(method.HTTP_READ, '/product-category', null)
        yield put({
            type: types.GET_CATEGORY_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_CATEGORY_FAILURE,
            payload: err
        })
    }
}

export const categorySaga = [
    takeEvery(types.GET_CATEGORY_REQUEST, getCategory)
]