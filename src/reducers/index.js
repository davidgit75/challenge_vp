import { combineReducers } from 'redux';
// all the reducers for the logic of the application

// Normally use more than one file for the reducers
// but like are only two reducers I think isn't necessary

// import actions types
import actions from '../actions/actionTypes';

const data = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_DATA:
      return payload;
    case actions.REMOVE_ITEM:
      const removed = [ ...state.splice(payload, 1) ];
      return [ ...state ];
    default:
      return state;
  }
}

const focus = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_FOCUSED_ITEM:
      return payload;
    default:
      return state;
  }
}

const loading = (state = true, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_LOADING:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  focus,
  loading
});
