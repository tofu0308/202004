import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import { addTodo, toggleTodo, setVisibilityFilter } from './actions/todo'

import todo from './reducers'
import Todo from './components/App'


let todoStore = createStore(todo);

// 初期値
console.log(todoStore.getState());


class Welcome extends React.Component {
  render() {
    return <h1>Hello, World</h1>;
  }
}
class Container extends  React.Component {
  render() {
    return (
      <div>
        <Welcome />

        <button onClick = {e => {
          // ReducerにActionをdispatchする
          this.props.dispatch({type: "INCREMENT"});
          console.log(this.props);
          console.log('INCREMENT');
        }}>
          加算ボタン
        </button>

        <button onClick = {e => {
          // ReducerにActionをdispatchする
          this.props.dispatch({type: "DECRIMENT"});
          console.log(this.props);
          console.log('DECRIMENT');
        }}>
          減算ボタン
        </button>

      <p>{this.props.value}</p>
      </div>
    )
  }
}

// NewComponent = connect(ComponentからdispatchされたAction) (Component)
const App = connect(
  state => state
)(Container);

// Reducer
const reducer = (state = {value: 0}, action) => {
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

// Reducerの戻り値を新しい状態（State）としてStoreで管理する
const store = createStore(reducer);


// Root Render
// ReduxのProviderコンポーネントで、Appコンポーネント
// （connect関数にComponentを渡して作成したNewComponent）をラップし、Storeを渡す
// （簡単に言えば）propsにStateが入る
render (
  <Provider store={ store }>
      <App />
  </Provider>,
  document.getElementById("root")
);

render (
  <Provider store={ todoStore }>
      <Todo />
  </Provider>,
  document.getElementById("todo")
);
