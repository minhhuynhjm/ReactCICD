
import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  console.log('rootSaga');

  yield all([
    helloSaga(),
    counterSaga(), // Add your counter saga here
    // Add other sagas here
  ]);
}