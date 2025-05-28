import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Sagas!');
  yield null; // Add a yield to satisfy require-yield
}

export default function* rootSaga() {
  console.log('rootSaga');

  yield all([
    helloSaga(),
    counterSaga(), // Add your counter saga here
    // Add other sagas here
  ]);
}
