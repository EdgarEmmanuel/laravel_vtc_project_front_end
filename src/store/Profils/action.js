import { 
    GET_PROFILS,
    API_PROFILS_RESPONSE_SUCCESS, 
    API_PROFILS_RESPONSE_ERROR,
    ADD_PROFIL,
    UPDATE_PROFIL,
    DELETE_PROFIL } from "./actionType" ;



export const profilsApiResponseSuccess = (actionType, data) => ({
  type: API_PROFILS_RESPONSE_SUCCESS,
  payload: { actionType, data },
});



export const profilsApiResponseError = (actionType, error) => ({
    type: API_PROFILS_RESPONSE_ERROR,
    payload: { actionType, error },
  });






  
export const getProfils= (defaultPaginationOption) => ({
    type: GET_PROFILS,
    payload: defaultPaginationOption
});













export const addProfil = (profil, defaultPaginationOption) => {
  return {
    type: ADD_PROFIL,
    payload: { profil, defaultPaginationOption },
  };
};







export const updateProfil = (profil, defaultPaginationOption) => {
  return {
    type: UPDATE_PROFIL,
    payload: { profil, defaultPaginationOption },
  };
};






export const deleteProfil = (id, defaultPaginationOption) => {
  return {
    type: DELETE_PROFIL,
    payload: { id, defaultPaginationOption },
  };
};