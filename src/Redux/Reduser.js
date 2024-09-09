import {
  ADD_TASK,
  UPDATE_TASK_DESCRIPTION,
  UPDATE_TASK_TITLE,
  TOTAL_PRICE,
} from "./ActionType";

const initialState = {
  tasks: [],
  taskTitle: "",
  taskDescription: "",
  totalPrice: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        taskTitle: "",
        taskDescription: "",
      };
    case UPDATE_TASK_TITLE:
      return {
        ...state,
        taskTitle: action.payload,
      };
    case UPDATE_TASK_DESCRIPTION:
      return {
        ...state,
        taskDescription: action.payload,
      };
    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
