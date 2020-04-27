import React /*,{ PropTypes }*/ from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
    {text}
  </li>
)

/* 謎エラー吐くので一旦不使用にする
Todo.propTypes = {
  text: PropTypes.string.isRequired
}
*/

export default Todo