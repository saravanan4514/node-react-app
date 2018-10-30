'use strict';

import axios from 'axios';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  /**
   * if (error.response !== undefined && error.response.status === 401) {
   *  location.reload();
   * }
   */
  return Promise.reject(error);
});

export function getJobResults (searchDetails) {
  console.log(searchDetails);
  return axios({
    method: 'get',
    url: `/api/jobs?role=${searchDetails.role}&availability=${searchDetails.availability}`
  });
}
