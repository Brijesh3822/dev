import {
  ADD_CART,
  DECREMENT_QTY,
  INCREMENT_QTY,
  LOGIN_DATA,
  REMOVE_QTY,
  SIGNUP_DATA,
  TOTAL_PRICE,
} from "./ActionType";

// export const addTask = (task) => {
//   return {
//     type: ADD_TASK,
//     payload: task,
//   };
// };

export const addCart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};

export const incrementqty = (data) => {
  return {
    type: INCREMENT_QTY,
    payload: data,
  };
};
export const decrementqty = (data) => {
  return {
    type: DECREMENT_QTY,
    payload: data,
  };
};
export const removeqty = (data) => {
  return {
    type: REMOVE_QTY,
    payload: data,
  };
};

export const signup = (data) => {
  return {
    type: SIGNUP_DATA,
    payload: data,
  };
};

export const login = (data) => {
  return {
    type: LOGIN_DATA,
    payload: data,
  };
};
// export const totalPrice = (value) => {
//   return {
//     type: TOTAL_PRICE,
//     payload: value,
//   };
// };
