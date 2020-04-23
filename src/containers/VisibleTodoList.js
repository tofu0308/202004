import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  console.log(state);
  return { todos: state.todos }
}

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)
export default VisibleTodoList