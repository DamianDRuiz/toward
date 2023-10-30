import { ChangeEvent, FormEvent, useState } from 'react'
import { Todo } from 'src/util/types'
import { useImmer } from 'use-immer'

export interface UseTodos {
  todos: Todo[]
  addTodoInput: string
  handleAddTodoInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleAddTodoSubmit: (e: FormEvent) => void
}

export function useTodos(optionalTodos: Todo[] = []): UseTodos {
  const [todos, setTodos] = useImmer<Todo[]>(optionalTodos)
  const [addTodoInput, setAddTodoInput] = useState<string>('')

  const handleAddTodoInput = (e: ChangeEvent<HTMLInputElement>) =>
    setAddTodoInput(e.target.value)

  const handleAddTodoSubmit = (e: FormEvent) => {
    e.preventDefault()

    setTodos((draft) => {
      draft.push({
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
    handleAddTodoInput,
    handleAddTodoSubmit,
  }
}

export default useTodos
