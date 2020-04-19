import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

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
        <button>
          加算ボタン
        </button>

        <p>ここに数値が入る</p>
      </div>
    )
  }
}

render (<Container />,document.getElementById("root"));