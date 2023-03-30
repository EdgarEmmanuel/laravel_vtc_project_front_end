import { APIClient } from "../../../../helpers/api_helper";
import * as url from "../../../../helpers/url_helper";


const api = new APIClient();




// get Profils
export const getProfilsApiCall = async (options) => {

  const response = await api.post(url.GET_PROFILS_API_WORKFLOW_PROCESSING, options) ;
  const { error, data, code } = response ;
  if(code === 200){
    return data;
  } else {
    throw new Error("Le token est a son terme ");
  }
};







// add profil
export const addProfilApiCall = async (profil, defaultPaginationOption) => {

  const response = await api.post(url.GET_PROFILS_API_WORKFLOW, profil) ;
  const { error, data, code } = response ;

  console.log()
  
  if([200, 201].includes(code)){
    return getProfilsApiCall(defaultPaginationOption)
  } else {
    throw new Error("Le token est a son terme ");
  }
}







// update profil
export const updateProfilApiCall = async (profil, defaultPaginationOption) => {

  const response = await api.put(url.GET_PROFILS_API_WORKFLOW, profil) ;
  const { code } = response ;

  if([200, 201].includes(code)){
    return getProfilsApiCall(defaultPaginationOption)
  } else {
    throw new Error("Le token est a son terme ");
  }
}





export const deleteProfilApiCall = async (id, defaultPaginationOption) => {

  const response = await api.delete(url.GET_PROFILS_API_WORKFLOW, {
    data:{
      id: id
    }
  }) ;
  const { code } = response ;

  if([200, 201, 204].includes(code)){
    return getProfilsApiCall(defaultPaginationOption)
  } else {
    throw new Error("Le token est a son terme ");
  }
}