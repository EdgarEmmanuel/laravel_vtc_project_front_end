import { 
    API_PASSENGERS_RESPONSE_SUCCESS, 
    API_PASSENGERS_RESPONSE_ERROR,
    ADD_PASSENGER 
  } from "./actionType" ;



  
export const passengerApiResponseSuccess = (actionType, data) => ({
  type: API_PASSENGERS_RESPONSE_SUCCESS,
  payload: { actionType, data },
});





export const passengerApiResponseError = (actionType, error) => ({
    type: API_PASSENGERS_RESPONSE_ERROR,
    payload: { actionType, error },
});













export const addPassenger = (profil) => {
  return {
    type: ADD_PASSENGER,
    payload: { profil, },
  };
};
