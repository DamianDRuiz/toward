import { DEFAULT_TODOS } from '../constants'
import { Todo, TodoList } from '../types'

export function App() {
  return (
    <>
      <TodoListComponent todos={DEFAULT_TODOS} />
      <TodoInput />
    </>
  )
}

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

interface TodoItemProps extends Todo {}

function TodoItem({ title, description, completed, due }: TodoItemProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {completed ? 'Completed' : 'Not Completed'}</p>
      <p>
        Due:{' '}
        {due
          ? `${due.getMonth() + 1}/${due.getDate()}/${due.getFullYear()}`
          : 'Whenever'}
      </p>
    </div>
  )
}

interface TodoInputProps {}

function TodoInput({}: TodoInputProps) {
  return <div>Input</div>
}

export default App
