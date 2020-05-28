import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// Reducer
const counter = (state = {value: 0}, action) => {
  // Componentの中でdispatchされたActionがaction変数に入ってくる
  // action = { type: "INCREMENT" }
  switch(action.type) {
    case "INCREMENT":
      // valueを加算
      console.log(`加算前のvalue:${state.value}`);
      return Object.assign({}, {value: state.value + 1});

      case "DECRIMENT":
        // valueを減算
        console.log(`減算前のvalue:${state.value}`);
        return Object.assign({}, {value: state.value - 1});
      default: return state;
  }
}


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  counter
});
export default todoApp