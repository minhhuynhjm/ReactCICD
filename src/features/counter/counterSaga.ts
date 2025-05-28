import { PayloadAction } from "@reduxjs/toolkit";
import { take, takeEvery } from "redux-saga/effects";
import { increment } from "./counterSlice";


export function* log(action: PayloadAction) {
  console.log("Action:", action);
} 

export default function* counterSaga() {
  console.log('counterSaga');
  // Add your saga logic here

  yield takeEvery(increment().type, log);
}