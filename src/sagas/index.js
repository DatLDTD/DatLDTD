import { all } from 'redux-saga/effects';
import { productSaga } from './productSaga'
import { billSaga } from './billSaga'
import { materialSaga } from './materialSaga'
import { collectionSaga} from './collectionSaga'
import { categorySaga } from './categorySaga'
import { featureSaga } from './featureSaga';
export default function* rootSaga() {
  yield all([
    ...productSaga,
    ...billSaga,
    ...materialSaga,
    ...collectionSaga,
    ...categorySaga,
    ...featureSaga
  ]);
}