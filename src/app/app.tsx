import { DEFAULT_TODOS } from '../constants'

export function App() {
  return (
    <>
      <TodoList todos={DEFAULT_TODOS} />
      <TodoInput />
    </>
  )
}

interface TodoListProps {
  todos: TodoList
}

function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      List
      <TodoItem />
    </div>
  )
}

interface TodoItemProps {}

function TodoItem() {
  return <div>Item</div>
}

interface TodoInputProps {}

function TodoInput() {
  return <div>Input</div>
}

export default App
