import * as types from '../constants'
import * as method from '../constants'
import { takeEvery, put, select } from 'redux-saga/effects'
import callAPI from '../fetchAPIs/callAPI'

function* getCollection() {
    try {
        let res = yield callAPI(method.HTTP_READ, '/product-collection', null)
        yield put({
            type: types.GET_COLLECTION_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_COLLECTION_FAILURE,
            payload: err
        })
    }
}

export const collectionSaga = [
    takeEvery(types.GET_COLLECTION_REQUEST, getCollection)
]