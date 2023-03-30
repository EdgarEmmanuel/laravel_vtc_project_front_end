import axios from "axios";
import * as URL from "./url_helper";
//import { refreshTokenFn } from "./refreshToken";

// default
axios.defaults.baseURL = URL.API_URL;



// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const token = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).data.token : null;

//console.log(token);
if(token)
axios.defaults.headers.common["token"] = token;




// intercepting the request 
// axios.interceptors.request.use(
//   async config => {
//     if(token){
//       refreshTokenFn();
//       const TOKEN = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).data.token : null;
//       config.headers = { 
//         'token': `${TOKEN}`,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }
//     return config;
//   },
//   error => {
//     Promise.reject(error)
// });









// intercepting to capture errors
axios.interceptors.response.use(
  async function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
// const setAuthorization = (token) => {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// };

const setAuthorization = (token) => {
  axios.defaults.headers.common["token"] =  token;
};

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url, params = null) => {
    let response;

    let paramKeys = [];

    if (params) {
      Object.keys(params).map(key => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };


  /**
   * post given data to url
   */
  create = (url, data) => {
    return axios.post(url, data);
  };


  /**
   * Updates data
   */
  update = (url, data) => {
    return axios.patch(url, data);
  };


  /**
   * update with put
   * @param {*} url 
   * @param {*} data 
   * @returns 
   */
  put = (url, data) => {
    return axios.put(url, data);
  }


  /**
   * 
   * @param {*} url 
   * @param {*} data 
   * @returns 
   */
  post = (url, data) => {
    return axios.post(url, data);
  };


  
  /**
   * Delete
   */
  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };
}
const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, setAuthorization, getLoggedinUser };