import { all, fork } from "redux-saga/effects";


import PassengersSaga from "./passenger/saga";


export default function* rootSaga() {
    yield all([
      //public
      fork(PassengersSaga),
    ]);
  }
  