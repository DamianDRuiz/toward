export interface Todo {
  title: string
  description: string | null
  completed: boolean
  due: Date | null
}

export type TodoList = Todo[]
