import React from 'react'
import { connect } from 'react-redux'
import addTodo from '../actions/todo'

let AddTodo = () => {
  let input;

  return(
    <div>
      <input />
      <button>
        add todo
      </button>
    </div>
  );

}

export default AddTodo