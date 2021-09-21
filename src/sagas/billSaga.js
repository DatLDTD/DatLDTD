import * as types from '../constants'
import * as method from '../constants'
import { takeEvery, put, select } from 'redux-saga/effects'
import callAPI from '../fetchAPIs/callAPI'

function* addBill(action) {
    try {
        let res = yield callAPI(method.HTTP_CREATE, '/bill', action.payload)
        yield put({
            type: types.ADD_BILL_SUCCESS,
            payload: res
        })
    } catch (err) {
        yield put({
            type: types.ADD_BILL_FAILURE,
            payload: err
        })
    }
}

export const billSaga = [
    takeEvery(types.ADD_BILL_REQUEST, addBill)
]