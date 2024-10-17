import { signup } from "./Action";
import { LOGIN_DATA, SIGNUP_DATA } from "./ActionType";

const initialState = {
  signupdata: [],
  isLoging: false,
};

export const signdataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_DATA:
      // console.log(payload);
      return {
        ...state,
        signupdata: [...state.signupdata, payload],
        isLoging: true,
      };
    case LOGIN_DATA:
      console.log(payload);
      return {
        ...state,
        signupdata: payload,
        isLoging: true, 
      };
    default:
      return state;
  }
};
