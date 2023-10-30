//import styles from './TodoListComponent.module.scss'

import { TodoList, todoClickHandler } from 'src/util/types'
import TodoItem from '../TodoItem/TodoItem'

interface TodoListProps {
  todos: TodoList
  handleTodoClick: todoClickHandler
}

function TodoListComponent({ todos, handleTodoClick }: TodoListProps) {
  const todoElements = todos.map((todo, key) => (
    <TodoItem
      key={key}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      completed={todo.completed}
      due={todo.due}
      handleTodoClick={handleTodoClick}
    />
  ))
  return <div>{todoElements}</div>
}

export default TodoListComponent
