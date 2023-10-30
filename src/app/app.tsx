import TodoInput from 'src/components/TodoInput/TodoInput'
import TodoListComponent from 'src/components/TodoListComponent/TodoListComponent'
import useTodos from 'src/hooks/useTodos/useTodos'
import { DEFAULT_TODOS } from 'src/util/constants'

export function App() {
  const {
    todos,
    handleTodoClick,
    addTodoInput,
    handleAddTodoInput,
    handleAddTodoSubmit,
  } = useTodos(DEFAULT_TODOS)
  return (
    <>
      <TodoListComponent todos={todos} handleTodoClick={handleTodoClick} />
      <TodoInput
        input={addTodoInput}
        onChange={handleAddTodoInput}
        onSubmit={handleAddTodoSubmit}
      />
    </>
  )
}

export default App
