import * as types from '../constants'
import * as method from '../constants'
import { takeEvery, put, select } from 'redux-saga/effects'
import callAPI from '../fetchAPIs/callAPI'

function* getFeature() {
    try {
        let res = yield callAPI(method.HTTP_READ, '/product-feature', null)
        yield put({
            type: types.GET_FEATURE_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_FEATURE_FAILURE,
            payload: err
        })
    }
}

export const featureSaga = [
    takeEvery(types.GET_FEATURE_REQUEST, getFeature)
]