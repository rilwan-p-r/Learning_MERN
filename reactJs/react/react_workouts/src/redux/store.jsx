import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger'

const appReducer = combineReducers({
  valueReducer,
});

function valueReducer(prevStateValue = 0, action) {
  switch (action.type) {
    case "increment":
      return prevStateValue + 1;
    case "decrement":
      return prevStateValue - 1;
    default:
      return prevStateValue;
  }
}
 export function actionIncrement() {
  return { type: "increment" }
}
export function actionDecrement() {
  return { type: "decrement" }
}
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         value: state.value + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         value: state.value - 1,
//       };
//     default:
//       return state;
//   }
// };
const store = createStore(appReducer,applyMiddleware(logger));
export default store;
