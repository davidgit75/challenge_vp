import data from '../data/data';
import actions from './actionTypes';

// to make the fake fetching of the data for the firs time
const fakeFetchListData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000);
  });
}

// All the actions you're going to perform are here

// Action to remove item from table data list
export const removeItem = state => ({
  type: actions.REMOVE_ITEM,
  payload: state,
});

export const setData = state => ({
  type: actions.SET_DATA,
  payload: state,
});

// Action to set the item focused to update result text
export const updateFocusedItem = state => ({
  type: actions.UPDATE_FOCUSED_ITEM,
  payload: state,
});

// Action to set the loading indicator
export const setLoading = state => ({
  type: actions.SET_LOADING,
  payload: state,
});
