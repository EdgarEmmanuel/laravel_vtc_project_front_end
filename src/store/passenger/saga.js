import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { 
    ADD_PASSENGER
   } from "./actionType" ;


import { 
  passengerApiResponseSuccess,
  passengerApiResponseError  } from './action' ;


import {
  addPassengerApiCall,
} from "./backend_logic/PassengerBackendCalls.js";









function* addPassenger({ payload: { profil } }) {
  try {
    const response = yield call(addPassengerApiCall, profil,);
    yield put(passengerApiResponseSuccess(ADD_PASSENGER, response));
  } catch (error) {
    yield put(passengerApiResponseError(ADD_PASSENGER, error));
  }
}

export function* watchOnAddPassenger() {
  yield takeEvery(ADD_PASSENGER, addPassenger);
}














function* PassengersSaga() {
    yield all([
      fork(watchOnAddPassenger),
    ]);
  }
  
  export default PassengersSaga;