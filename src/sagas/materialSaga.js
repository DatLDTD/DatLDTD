import * as types from '../constants'
import * as method from '../constants'
import { takeEvery, put, select } from 'redux-saga/effects'
import callAPI from '../fetchAPIs/callAPI'

function* getAllMaterial() {
    try {
        let res = yield callAPI(method.HTTP_READ, '/product-material', null)
        yield put({
            type: types.GET_MATERIAL_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.GET_MATERIAL_FAILURE,
            payload: err
        })
    }
}

export const materialSaga = [
    takeEvery(types.GET_MATERIAL_REQUEST, getAllMaterial)
]