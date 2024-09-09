import {
  ADD_TASK,
  UPDATE_TASK_DESCRIPTION,
  UPDATE_TASK_TITLE,
  TOTAL_PRICE,
} from "./ActionType";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const updateTaskTitle = (value) => {
  return {
    type: UPDATE_TASK_TITLE,
    payload: value,
  };
};

export const updateTaskDescription = (value) => {
  return {
    type: UPDATE_TASK_DESCRIPTION,
    payload: value,
  };
};

export const totalPrice = (value) => {
  return {
    type: TOTAL_PRICE,
    payload: value,
  };
};
