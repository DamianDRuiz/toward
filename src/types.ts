interface Todo {
  title: string
  description: string
  completed: boolean
  due: Date | null
}

type TodoList = Todo[]
