import React /*,{ PropTypes }*/ from "react"
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)

/* 謎エラー吐くので一旦不使用にする
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}
*/

export default TodoList

