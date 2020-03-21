import { takeEvery, put, call, spawn } from 'redux-saga/effects';
import { putData } from '../actions';
// import {useSelector} from 'react-redux';

function fetchData() {
  return fetch('https://api.iev.aero/api/flights/18-03-2020').then(
    response => response.json(),
  );
}

export function* workerLoadLoc() {
  console.log('IT`S ALIVE!!!');
  const data = yield call(fetchData);
  yield put(putData(data));
}

export function* watchLoadData() {
  yield takeEvery('LOAD_DATA', workerLoadLoc);
}

export function* rootSaga() {
  yield spawn(watchLoadData);
}
