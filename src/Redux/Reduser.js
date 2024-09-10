import {
  ADD_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
  REMOVE_QTY,
} from "./ActionType";

const initialState = {
  cartdata: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      console.log(payload);
      // return state;
      return {
        ...state,
        cartdata: [...state.cartdata, payload],
      };

    case INCREMENT_QTY:
      return {
        ...state,
        cartdata: state.cartdata.map((e) => {
          if (e.id == payload.id) {
            return { ...e, qty: payload.qty };
          }
          return e;
        }),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        cartdata: state.cartdata.map((e) => {
          if (e.id == payload.id) {
            return { ...e, qty: payload.qty };
          }
          return e;
        }),
      };
    case REMOVE_QTY:
      return {
        ...state,
        cartdata: state.cartdata.filter((e) => e.id !== payload),
      };
    // case REMOVE_QTY:
    //   return {
    //     ...state,
    //     cart: state.cart.map((el) => {
    //       if (el.id === payload.id) {
    //         return { ...el, qty: payload.qty };
    //       }
    //       return el;
    //     }),
    //   };
    // case UPDATE_TASK_TITLE:
    //   return {
    //     ...state,
    //     taskTitle: apayload,
    //   };
    // case UPDATE_TASK_DESCRIPTION:
    //   return {
    //     ...state,
    //     taskDescription: action.payload,
    //   };
    // case TOTAL_PRICE:
    //   return {
    //     ...state,
    //     totalPrice: payload,
    //   };
    default:
      return state;
  }
};

export default taskReducer;
