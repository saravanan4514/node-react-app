'use strict';

import * as actionEvents from './events';

export function settings () {
  return {
    type: actionEvents.SET_SETTINGS
  };
}

export function getSettings () {
  return function (dispatch) {
    dispatch(settings());
  };
}
