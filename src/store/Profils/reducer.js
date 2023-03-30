import { 
    GET_PROFILS,
    API_PROFILS_RESPONSE_SUCCESS,
    API_PROFILS_RESPONSE_ERROR, ADD_PROFIL,
    UPDATE_PROFIL,
    DELETE_PROFIL } from "./actionType" ;


const INIT_STATE = {
    messages: {},
    profils: [],
    error: {},
};


const Profils = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_PROFILS_RESPONSE_SUCCESS:
          switch (action.payload.actionType) {
            case GET_PROFILS:
              return {
                ...state,
                profils: action.payload.data,
              };
            case ADD_PROFIL:
                return {
                  ...state,
                  profils: action.payload.data,
                };
            case UPDATE_PROFIL:
                  return {
                    ...state,
                    profils: action.payload.data
                  };
            case DELETE_PROFIL:
                    return {
                      ...state,
                      profils: action.payload.data
                    };
            default:
              return { ...state };
          }

        case API_PROFILS_RESPONSE_ERROR:
            switch (action.payload.actionType) {
               case GET_PROFILS:
                    return {
                      ...state,
                      error: action.payload.error,
                    };

               case ADD_PROFIL:
                      return {
                        ...state,
                        error: action.payload.error,
                      };
                case UPDATE_PROFIL:
                        return {
                          ...state,
                          error: action.payload.error,
                        };
                case DELETE_PROFIL:
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



export default Profils;