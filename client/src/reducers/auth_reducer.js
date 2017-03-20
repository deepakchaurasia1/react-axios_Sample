/**
 * import our action type
 */
import { TEST_ACTION, GET_ALL } from '../actions/types';

/**
 * define the initial state of our auth reducer
 */
const INTIAL_STATE = { message: ''};

/**
 * switch statement checks to see if the dispatched action requires any work from
 * this reducer
 */
export default function (state = INTIAL_STATE, action) {
  switch(action.type) {
    case TEST_ACTION:
      return { ...state, message: action.payload.message };
    case GET_ALL: {
      return { ...state, message: action.payload };
    }
  }

  /**
   * return the state to the reducer index.js
   */
  return state;
}
