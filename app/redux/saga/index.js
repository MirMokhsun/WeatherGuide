import { takeEvery, put, call, spawn } from 'redux-saga/effects';
import { LOADDATA, PUTDATA, putData } from '../actions';
// import {useSelector} from 'react-redux';

function fetchData() {
  return fetch('https://api.iev.aero/api/flights/18-03-2020').then(
    response => response.json(),
    // console.log('Response')
  );
}

export function* workerLoadLoc() {
  console.log('IT`S ALIVE!!!');
  const data = yield call(fetchData);
  console.log('Data is here but you didnt see it', { data });
  yield put(putData(data));
}

export function* watchLoadData() {
  yield takeEvery('LOADDATA', workerLoadLoc);
}

export function* rootSaga() {
  yield spawn(watchLoadData);
}
