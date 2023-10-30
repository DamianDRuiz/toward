import TodoInput from 'src/components/TodoInput/TodoInput'
import TodoListComponent from 'src/components/TodoListComponent/TodoListComponent'
import useTodos from 'src/hooks/useTodos/useTodos'
import { DEFAULT_TODOS } from 'src/util/constants'
import styles from './app.module.scss'

export function App() {
  const {
    todos,
    addTodoInput,
    handleTodoClick,
    handleAddTodoInput,
    handleAddTodoSubmit,
  } = useTodos(DEFAULT_TODOS)
  return (
    <div className={`toward ${styles.toward}`}>
      <TodoListComponent todos={todos} handleTodoClick={handleTodoClick} />
      <TodoInput
        input={addTodoInput}
        onChange={handleAddTodoInput}
        onSubmit={handleAddTodoSubmit}
      />
    </div>
  )
}

export default App
