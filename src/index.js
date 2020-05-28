import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import todo from './reducers'
import Todo from './components/App'

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

      <p>{this.props.counter.value}</p>
      </div>
    )
  }
}

// NewComponent = connect(ComponentからdispatchされたAction) (Component)
const App = connect(
  state => state
)(Container);


// Reducerの戻り値を新しい状態（State）としてStoreで管理する
const store = createStore(todo);


// Root Render
// ReduxのProviderコンポーネントで、Appコンポーネント
// （connect関数にComponentを渡して作成したNewComponent）をラップし、Storeを渡す
// （簡単に言えば）propsにStateが入る
render (
  <Provider store={ store }>
      <App />
      <Todo />
  </Provider>,
  document.getElementById("root")
);