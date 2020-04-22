import React /*,{ PropTypes }*/ from 'react'

const Todo = ({ text }) => (
  <li>
    {text}
  </li>
)

/* 謎エラー吐くので一旦不使用にする
Todo.propTypes = {
  text: PropTypes.string.isRequired
}
*/

export default Todo