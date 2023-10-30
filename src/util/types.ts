export interface Todo {
  id: number
  title: string
  description: string | null
  completed: boolean
  due: Date | null
}

export type TodoList = Todo[]
