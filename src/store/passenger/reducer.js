import { 
    API_PASSENGERS_RESPONSE_SUCCESS,
    API_PASSENGERS_RESPONSE_ERROR, 
    ADD_PASSENGER } from "./actionType" ;


const INIT_STATE = {
    passengers: {},
    profils: [],
    error: {},
};


const Passengers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_PASSENGERS_RESPONSE_SUCCESS:
          switch (action.payload.actionType) {
            case ADD_PASSENGER:
                return {
                  ...state,
                  passengers: action.payload.data,
                };
            default:
              return { ...state };
          }

        case API_PASSENGERS_RESPONSE_ERROR:
            switch (action.payload.actionType) {

               case ADD_PASSENGER:
                      return {
                        ...state,
                        error: action.payload.error,
                      };
                  default:
                    return { ...state };
            }

        default:
            return state;
        }
}



export default Passengers;