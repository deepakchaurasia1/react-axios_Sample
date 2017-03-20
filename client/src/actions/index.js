'use-strict';

/**
 * make our imports
 */
import axios  from 'axios';
import { TEST_ACTION, GET_ALL } from './types';

/**
 * define our root api route
 */
const API_URL = 'http://localhost:3000/api';

var CancelToken = axios.CancelToken;
var cancel

axios.interceptors.request.use(function(config){
console.log('i intercepted')
  return config;
})

export function getAction() {
  return function(dispatch) {
    axios.get(`${API_URL}/helloworld`)
    .then(response => {
      dispatch({
        type: TEST_ACTION,
        payload: response.data
      });
    })
    .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          console.log('Error Occured')
        }
    })
  }
}

export function postAction(name) {
  return function(dispatch) {
    axios.post(`${API_URL}/saveData`)
      .then(response => {
        dispatch({
          type: TEST_ACTION,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export function getAllAction() {
  return function(dispatch) {
    axios.all(
      [
        axios.get(`${API_URL}/helloworld`),
        axios.get(`${API_URL}/helloNewers`)
      ])
      .then(axios.spread((res1,res2) => {
        dispatch({
          type: GET_ALL,
          payload: res1.data.message + "--------" + res2.data.message
        });
      }))
      .catch((error) => {
        console.log(error);
      })
  }
}

