//import styles from './TodoListComponent.module.scss'

import { TodoList } from 'src/util/types'
import TodoItem from '../TodoItem/TodoItem'

interface TodoListProps {
  todos: TodoList
}

function TodoListComponent({ todos }: TodoListProps) {
  const todoElements = todos.map((todo) => (
    <TodoItem
      title={todo.title}
      description={todo.description}
      completed={todo.completed}
      due={todo.due}
    />
  ))
  return (
    <div>
      List
      {todoElements}
    </div>
  )
}

export default TodoListComponent
