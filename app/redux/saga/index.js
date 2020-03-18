import {takeEvery, put, call, spawn} from 'redux-saga/effects';
import {loadData, putData} from '../actions';
// import {useSelector} from 'react-redux';

function fetchData() {
  return fetch('https://api.iev.aero/api/flights/18-03-2020').then(
    response => response.json(),
    // console.log('FUck My BrAiN'),
  );
}

export function* workerLoadLoc() {
  // console.log('IT`S ALIVE!!!');
  const data = yield call(fetchData);
  // console.log(data);
  yield put(putData(data));
}

export function* watchLoadData() {
  yield takeEvery(loadData, workerLoadLoc);
}

export function* rootSaga() {
  yield spawn(watchLoadData);
}
