import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects'; // Removed unused 'take'
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('Action:', action);
  yield; // Add a yield to satisfy require-yield
}

export default function* counterSaga() {
  console.log('counterSaga');
  // Add your saga logic here

  yield takeEvery(increment().type, log);
}
