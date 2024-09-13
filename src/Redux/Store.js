import {
  createStore,
  compose,
  applyMiddleware,
  legacy_createStore,
  combineReducers,
} from "redux";
import taskReducer from "./Reduser";
import { signdataReducer } from "./Signdata";

// export const store = createStore(taskReducer, {}, composeEnhancers());
// import {
//   compose,
//   applyMiddleware,
//   combineReducers,
//   legacy_createStore,
// } from "redux";

// import { thunk } from "redux-thunk";
// import { Product } from "./Product";

let combine = combineReducers({
  items: taskReducer,
  User: signdataReducer,
});

// export const store =createStore(reducer)

const composeEnhancers =
  typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
    ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({})
    : compose;
export const store = legacy_createStore(combine, composeEnhancers());
