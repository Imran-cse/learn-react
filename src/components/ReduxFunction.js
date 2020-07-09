import { createStore, combineReducers } from 'redux';

const initialState = {
  result: 1,
  lastValues: [],
};

const mathReducer = (
  state = {
    result: 1,
    lastValues: [],
  },
  action
) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: 'Max',
    age: 27,
  },
  action
) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };
      break;
  }
  return state;
};

export const store = createStore(combineReducers({ mathReducer, userReducer }));

// store.subscribe(() => {
//   console.log('Store updated!', store.getState());
// });

// store.dispatch({
//   type: 'ADD',
//   payload: 100,
// });

// store.dispatch({
//   type: 'SUBTRACT',
//   payload: 10,
// });
