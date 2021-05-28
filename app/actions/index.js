'use strict';

import * as actionEvents from './events';
import * as dataRequests from './dataRequests';


export function settings () {
  return {
    type: actionEvents.SET_SETTINGS
  };
}

export function setSearchUsersData (data) {
  return {
    type: actionEvents.SET_SEARCH_USERS_DATA,
    payload: data
  };
}

export function getSettings () {
  return function (dispatch) {
    dispatch(settings());
  };
}

export function searchUsers (details) {
  return function (dispatch) {
    return dataRequests.getUsers(details)
    .then(function (response) {
      dispatch(setSearchUsersData(response.data));
    })
    .catch(function (error) {
      // Dispatch notification for the showing the error msg in UI
      console.log('error in search users');
      console.log(error)
    });
  } 
}
