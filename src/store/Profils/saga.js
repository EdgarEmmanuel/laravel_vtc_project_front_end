import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { 
    GET_PROFILS,
    ADD_PROFIL, UPDATE_PROFIL, DELETE_PROFIL } from "./actionType" ;


import { 
    profilsApiResponseSuccess,
    profilsApiResponseError  } from './action' ;


import {
    getProfilsApiCall,
    addProfilApiCall,
    updateProfilApiCall,
    deleteProfilApiCall
} from "./backend_logic/ProfilsBackendCalls.js";










function* getProfilsData(defaultPaginationOption) {
    try {
      const { payload: options } = defaultPaginationOption ;

      const response = yield call(getProfilsApiCall, options);
      yield put(profilsApiResponseSuccess(GET_PROFILS, response));
    } catch (error) {
      yield put(profilsApiResponseError(GET_PROFILS, error));
      window.location.href = "/login" ;
    }
}



export function* watchOnGetProfils() {
    yield takeEvery(GET_PROFILS, getProfilsData);
}








function* addProfil({ payload: { profil, defaultPaginationOption } }) {
  try {
    const response = yield call(addProfilApiCall, profil, defaultPaginationOption);
    yield put(profilsApiResponseSuccess(ADD_PROFIL, response));
  } catch (error) {
    yield put(profilsApiResponseError(ADD_PROFIL, error));
  }
}

export function* watchOnAddProfils() {
  yield takeEvery(ADD_PROFIL, addProfil);
}









function* updateProfil({ payload: { profil, defaultPaginationOption } }) {
  try {
    const response = yield call(updateProfilApiCall, profil, defaultPaginationOption);
    yield put(profilsApiResponseSuccess(UPDATE_PROFIL, response));
  } catch (error) {
    yield put(profilsApiResponseError(UPDATE_PROFIL, error));
  }
}

export function* watchOnUpdateProfil() {
  yield takeEvery(UPDATE_PROFIL, updateProfil);
}








function* deleteProfil({ payload: { id, defaultPaginationOption } }) {
  try {
    const response = yield call(deleteProfilApiCall, id, defaultPaginationOption);
    yield put(profilsApiResponseSuccess(DELETE_PROFIL, response));
  } catch (error) {
    yield put(profilsApiResponseError(DELETE_PROFIL, error));
  }
}

export function* watchOnDeleteProfils() {
  yield takeEvery(DELETE_PROFIL, deleteProfil);
}









function* ProfilsSaga() {
    yield all([
      fork(watchOnGetProfils),
      fork(watchOnAddProfils),
      fork(watchOnUpdateProfil),
      fork(watchOnDeleteProfils)
    ]);
  }
  
  export default ProfilsSaga;