import { ChangeEvent, FormEvent, useState } from 'react'
import { Todo } from 'src/util/types'
import { useImmer } from 'use-immer'

export interface UseTodos {
  todos: Todo[]
  addTodoInput: string
  handleTodoClick: (e: React.SyntheticEvent<HTMLHeadingElement>) => void
  handleAddTodoInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleAddTodoSubmit: (e: FormEvent) => void
}

export function useTodos(optionalTodos: Todo[] = []): UseTodos {
  const [todos, setTodos] = useImmer<Todo[]>(optionalTodos)
  const [addTodoInput, setAddTodoInput] = useState<string>('')

  const handleTodoClick = (e: React.SyntheticEvent<HTMLHeadingElement>) =>
    setTodos((draft) => {
      if (!(e.target instanceof HTMLHeadingElement)) return
      if (e.target.dataset.id == undefined) return

      const todo = draft[parseInt(e.target.dataset.id)]
      todo.completed = !todo.completed
    })

  const handleAddTodoInput = (e: ChangeEvent<HTMLInputElement>) =>
    setAddTodoInput(e.target.value)

  const handleAddTodoSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTodos((draft) => {
      draft.push({
        id: draft.length,
        title: addTodoInput,
        description: null,
        completed: false,
        due: null,
      })
    })

    setAddTodoInput('')
  }

  return {
    todos,
    addTodoInput,
    handleTodoClick,
    handleAddTodoInput,
    handleAddTodoSubmit,
  }
}

export default useTodos
