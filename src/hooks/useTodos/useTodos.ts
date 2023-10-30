import { ChangeEvent, FormEvent, useState } from 'react'
import { Todo, todoClickHandler } from 'src/util/types'
import { useImmer } from 'use-immer'

export interface UseTodos {
  todos: Todo[]
  addTodoInput: string
  addTodoDescriptionInput: string
  handleTodoClick: todoClickHandler
  handleAddTodoInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleAddTodoDescriptionInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleAddTodoSubmit: (e: FormEvent) => void
}

export function useTodos(optionalTodos: Todo[] = []): UseTodos {
  const [todos, setTodos] = useImmer<Todo[]>(optionalTodos)
  const [addTodoInput, setAddTodoInput] = useState<string>('')
  const [addTodoDescriptionInput, setAddTodoDescriptionInput] =
    useState<string>('')

  const handleTodoClick = (e: React.SyntheticEvent<HTMLHeadingElement>) =>
    setTodos((draft) => {
      if (!(e.target instanceof HTMLHeadingElement)) return
      if (e.target.dataset.id == undefined) return
      const todo = draft[parseInt(e.target.dataset.id)]
      todo.completed = !todo.completed
    })

  const handleAddTodoInput = (e: ChangeEvent<HTMLInputElement>) =>
    setAddTodoInput(e.target.value)

  const handleAddTodoDescriptionInput = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setAddTodoDescriptionInput(e.target.value)

  const handleAddTodoSubmit = (e: FormEvent) => {
    e.preventDefault()
    setAddTodoInput('')
    setAddTodoDescriptionInput('')
    setTodos((draft) => {
      draft.push({
        id: draft.length,
        title: addTodoInput,
        description: addTodoDescriptionInput,
        completed: false,
        due: null,
      })
    })
  }

  return {
    todos,
    addTodoInput,
    addTodoDescriptionInput,
    handleTodoClick,
    handleAddTodoInput,
    handleAddTodoDescriptionInput,
    handleAddTodoSubmit,
  }
}

export default useTodos
