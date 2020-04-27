import React from 'react'
import { connect } from 'react-redux'
import addTodo from '../actions/todo'

let AddTodo = ({dispatch}) => {
  let input;

  return(
    <div>
      <input ref={(node)=> {
        input = node;
      }} />
      <button onClick = {()=>{
        if(input.value.length) dispatch(addTodo(input.value));
        
        input.value = '';
      }}>
        add todo
      </button>
    </div>
  );
}
AddTodo= connect()(AddTodo);

export default AddTodo