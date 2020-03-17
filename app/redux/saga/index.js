import {takeEvery, put, call} from 'redux-saga/effects';
import {loadLoc, getLoc} from '../actions';

export function* workerLoadLoc() {
  console.log('IT`S ALIVE!!!');
  // yield put(getLoc);
}

export function* watchLoadLoc() {
  yield takeEvery(loadLoc, workerLoadLoc);
}
