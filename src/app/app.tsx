import TodoInput from 'src/components/TodoInput/TodoInput'
import TodoListComponent from 'src/components/TodoListComponent/TodoListComponent'
import { DEFAULT_TODOS } from '../util/constants'

export function App() {
  return (
    <>
      <TodoListComponent todos={DEFAULT_TODOS} />
      <TodoInput />
    </>
  )
}

export default App
